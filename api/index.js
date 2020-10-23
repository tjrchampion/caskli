require('dotenv').config()

const nanoid = require('nanoid');
const yup = require('yup');
const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');
const { response } = require('express');
const puppeteer = require('puppeteer');
const appendHttp = require('./append-http');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//create a new URL
app.post('/', jsonParser, async (req, res, next)   => {

  let {slug, url, meta} = req.body;
  let nanid = nanoid.nanoid(5);
  let slugEntry = (slug) ? slug : nanid.toLowerCase();

  let schema = yup.object().shape({
    slug: yup.string().trim().matches(/[a-z_-]/i),
    url: yup.string().required()
  });

  let isValid = await schema.isValid({
    slug: slugEntry,
    url: url
  }).then((valid) => {
    return valid;
  });


  if(isValid) {

    let appended = appendHttp(url);

    try {

      const browser = await puppeteer.launch({
        defaultViewport: {
            width: 800,
            height: 500,
            isLandscape: true
        }
      });
      const page = await browser.newPage();
      await page.goto(appended, { waitUntil: ['load', 'networkidle0'] });
      await page.screenshot({path: `static/thumbs/${nanid}.png`});

      await browser.close();

      meta.file = `${nanid}.png`; 

      let metaJson = JSON.stringify(meta);

      connection.query('INSERT INTO urls (slug, url, meta, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())', [slugEntry, url, metaJson], (err, results, fields) => {
        if (!err) {
          return res.status(200).json({
            slug: slugEntry,
            url: url,
            meta: metaJson,
            message: 'URL brewed!',
            created_at: new Date()
          });
        }
      });


    } catch(err) {
      return res.status(404).json({
        success: false,
        message: 'We tried to find your URL but were unsuccessful.',
      });
    }

  }

});

//return a specific url
app.get('/:id', (req, res, next) => {
  connection.query('SELECT * FROM urls WHERE slug = ?',[req.params.id], (err, rows, fields) => {
    if (!err) {
      res.end(JSON.stringify({
        data: rows
      }));
    } else {
      next(err);
    }
  })
});


app.get('/', (req, res, next) => {
  connection.query('SELECT * FROM urls ORDER BY created_at DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      next(err);
    }
  })
});
module.exports = { path: '/api', handler: app }