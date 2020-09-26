"use strict";

// Packages
const env = require("dotenv").config();
const randomstring = require("randomstring");
var mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

// models
const User = require("../../models/user");

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  const key = randomstring.generate({
    length: 10,
    charset: "alphanumeric",
  });

  try {
  const user = await User.query().patch({ key: key }).where("email", email);

  if(!user) {
    res.status(400).json({ status: "Failed", message: "Password reset error: Unable to update user key" });
  }

    const data = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_MAIL}>`,
      to: email,
      subject: "Please reset your password",
      html: `If you have requested to reset your password, please click
      <a href='http://${req.headers.host}/user/forgot-password/${key}'>Here</a>
      to do so.`,
    };

    mailgun.messages().send(data, function (errorSendingMail, body) {
      if (errorSendingMail) {
        res.status(201).json({
          status: "failure",
          message: errorSendingMail.message,
        });
      } else {
        res.status(201).json({
          status: "success",
          message: "Password reset email sent",
        });
      }
    });
  } catch (errorResetingPassword) {
    res.status(400).json({
      status: "error",
      message: errorResetingPassword.message,
    });
  }
};
