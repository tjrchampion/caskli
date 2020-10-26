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
const path = require('path');
const { json } = require('body-parser');

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

      // const browser = await puppeteer.launch({
      //   headless: true,
      //   args: [
      //     '--no-sandbox',
      //     '--disable-setuid-sandbox',
      //   ],
      //   defaultViewport: {
      //       width: 800,
      //       height: 500,
      //       isLandscape: true
      //   }
      // });
      // const page = await browser.newPage();
      // await page.goto(appended, { waitUntil: ['load', 'networkidle0'], timeout: 0 });
      // await page.screenshot({path: path.join(__dirname, '../static/thumbs', `${nanid}.png`)});

      // await browser.close();

      // meta.file = `${nanid}.png`; 

      meta.clicks = 0;

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
      console.log(err);
      return res.status(404).json({
        success: false,
        message: 'We tried to find your URL but were unsuccessful.'
      });
    }

  } else {
    return res.status(401).json({
      status: false,
      message: 'Not a valid brew structure.'
    })
  }

});

app.get('/:id', (req, res, next) => {
  connection.query('SELECT * FROM urls WHERE slug = ?',[req.params.id], (err, rows, fields) => {
    if (!err) {
      res.status(200).json({
        data: rows
      });
    } else {
      next(err);
    }
  })
});

app.put('/:id', jsonParser, async (req, res, next)   => {

  let meta  = req.body;

  meta.clicks += 1;

  let metaJson = JSON.stringify(meta);

  connection.query('UPDATE urls SET meta = ? WHERE slug = ?', [metaJson, req.params.id], (err, rows, fields) => {
    if (!err) {
      res.status(200).json({
        success: true
      });
    } else {
      next(err);
    }
  })

})

app.get('/', (req, res, next) => {
  connection.query('SELECT * FROM urls ORDER BY created_at DESC', (err, rows, fields) => {
    if (!err) {

      const pageCount = Math.ceil(rows.length / 10);
      let page = parseInt(req.query.page);
      if (!page) { page = 1;}
      if (page > pageCount) {
        page = pageCount
      }

      res.status(200).json({
        "page": page,
        "pageCount": pageCount,
        "urls": rows.slice(page * 10 - 10, page * 10)
      });
    } else {
      next(err);
    }
  })
});
module.exports = { path: '/api', handler: app }
