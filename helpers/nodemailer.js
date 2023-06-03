const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "bohdan.kherson@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "bohdan.kherson@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;

// const email = {
//   to: "vasgendzhan228@gmail.com",
//   from: "bohdan.kherson@meta.ua",
//   subject: "Test email",
//   html: "<p>HELLOOOOOO</p>",
// };

// transport
//   .sendMail(email)
//   .then((email) => console.log(email))
//   .catch((err) => console.log(err));
