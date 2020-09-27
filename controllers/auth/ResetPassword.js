"use strict";

//const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const env = require("dotenv").config();

const User = require("../../models/user");

exports.resetPassword = async (req, res) => {
  const { resetKey, newPassword } = req.body;

  if(!resetKey) res.status(401).json({error: 'Authentication error, resetkey not found'});

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const user = await User.query().patch({ password: hashedPassword }).where("key", resetKey);
    if (!user) {
        res.status(400).json({ status: "Failed", message: "Password reset key doesn't exist" });
      }
    res.status(401).json({ status: "Success", message: "Password changed successfully" });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
  }
};
