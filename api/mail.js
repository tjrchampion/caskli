const mailgun = require('mailgun-js');

const mg = mailgun({ 
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: process.env.MAILGUN_HOST
});

const mail = async (to, subject, html) => {
  

  let data = {
    from: process.env.MAILGUN_FROM,
    to: to,
    subject: subject,
    html: html
  };

  return mg.messages().send(data);
};


module.exports = mail;