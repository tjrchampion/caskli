if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

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
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mail = require('./mail');


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//create a new URL
app.post('/', jsonParser, verifyToken, async (req, res, next)   => {

  let {slug, url, meta, user_id } = req.body;
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

  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if(err) {
      return res.status(403).json({
        status: false,
        message: 'Not authorised'
      });
    } else {

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
    
          connection.query('INSERT INTO urls (user_id, slug, url, meta, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())', [user_id, slugEntry, url, metaJson], (err, results, fields) => {
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
            dev_message: err.message
          });
        }
    
      } else {
        return res.status(401).json({
          status: false,
          message: 'Not a valid brew structure.'
        })
      }

    }
  });

});



//create a new URL
app.get('/account/me', verifyToken, async (req, res, next)   => {

  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if(err) {
      return res.status(403).json({
        status: false,
        message: 'Not authorised'
      });
    } else {
      return res.status(200).json({
        status: true,
        data: {
          id:  authData.user.id,
          fullname:  authData.user.fullname,
          email:  authData.user.email
        }
      });
    }
  });

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

app.get('/', verifyToken, async (req, res, next) => {

  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if(err) {
      return res.status(403).json({
        status: false,
        message: 'Not authorised'
      });
    } else {
      connection.query('SELECT * FROM urls WHERE user_id = ? ORDER BY created_at DESC', [authData.user.id], (err, rows, fields) => {
        if (!err) {
    
          const pageCount = Math.ceil(rows.length / 10);
          let page = parseInt(req.query.page);
          if (!page) { page = 1;}
          if (page > pageCount) {
            page = pageCount
          }
    
          res.status(200).json({
            page: page,
            pageCount: pageCount,
            urls: rows.slice(page * 10 - 10, page * 10)
          });
        } else {
          next(err);
        }
      });

    }
  });
});

app.post('/account/register', jsonParser, async (req, res, next)   => {
  let { fullname, email, password } = req.body;

  let schema = yup.object().shape({
    fullname: yup.string().max(255).min(2).required('Fullname is required'),
    email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: yup.string().max(255).min(8).required('Password is required')
  });

  schema.validate({ fullname: fullname, email: email, password: password }).catch((err) => {
    return res.status(401).json({
      status: false,
      errors: err.errors
    })
  });

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    let validate = `${process.env.APP_URL}/account/valiate?e=${email}`;
    let html =  `Thanks for joining Caskli. Please validate your email.<br><br><a href='${validate}'>Validate Account</a>`;
  

    connection.query('INSERT INTO users (fullname, email, password, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())', [fullname, email, hashPassword], (err, results, fields) => {
      if (!err) {

        mail(email, `Welcome to csk.li ${fullname}`, html);
        
        return res.status(200).json({
          status: true,
          message: 'User account created!',
        });
      }
      return res.status(401).json({
        status: true,
        errors: 'Sorry, email already exists.',
      });

    });

  } catch(err) {
    return res.status(401).json({
      status: true,
      errors: 'Error, account not created!',
      dev_message: err.message
    });
  }
});


app.post('/account/login', jsonParser, async (req, res) => {
  let {email, password } = req.body;
  connection.query('SELECT * FROM users WHERE email = ?',[email], (err, rows, fields) => {
    if (!err) {
      var user = Object.values(JSON.parse(JSON.stringify(rows)))[0];
      bcrypt.compare(password, user.password, (err, result) => {
        if(!result) {
          return res.status(401).json({
            status: false,
            message: 'Please check your user/password combination'
          });
        }

        jwt.sign({user: user}, process.env.JWT_SECRET, {expiresIn: '24h'}, (err, token) => {
          if(!err) {
            return res.status(200).json({
              status: true,
              token: token
            });
          }
        });

      });
    } else {
      next(err);
    }
  })

});



app.post('/account/logout', jsonParser, verifyToken, async (req, res) => {

  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if(err) {
      return res.status(403).json({
        status: false,
        message: 'Not authorised'
      });
    } else {
      return res.status(200).json({
        status: true,
        message: 'User logged out!'
      });
    }
  });

});


function verifyToken (req, res, next) {

  const bearerHeader  = req.headers['authorization'];
  if(bearerHeader !== undefined) {

    let bearer = bearerHeader.split(' ');
    let token = bearer[1];
    req.token = token;
    next();

  } else {
    res.status(403).json({
      status: false,
      message: 'Not authorised'
    })
  }

}

module.exports = { path: '/api', handler: app }
