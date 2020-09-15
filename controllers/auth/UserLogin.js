"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = require("dotenv").config();

const User = require("../../models/user");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.query().findOne({ email });
    if (email == user.email) {
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (passwordIsValid) {
        const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: process.env.JWT_EXP,
        });

        res.status(200).json({ status: "success", user, token });
      } else {
        res
          .status(401)
          .json({ status: "failed", message: "Incorrect Password" });
      }
    } else {
      res.status(404).json({
        status: "failed",
        message: "Email not found",
      });
    }
  } catch (loginError) {
    console.log("Error login in", loginError);

    res.status(400).json({ status: "failed", message: loginError.message });
  }
};