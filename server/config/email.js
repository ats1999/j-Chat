const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid-transport');

const   SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const transporter = nodemailer.createTransport(nodemailerSendgrid({
    auth:{
      api_key:SENDGRID_API_KEY
    }
}))

module.exports = transporter