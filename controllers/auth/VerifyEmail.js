"use strict";

const User = require("../../models/user");

exports.verifyEmail = async (req, res) => {
  const { key } = req.params;

  try {
    const user = await User.query().patch({ verified: 1 }).where("key", key);
    if(user) {
      res.status(200).json({ status: "success", message: "Email verified" });
    } else {
      res.status(401).json({ status: "Failed", message: "Incorrect/expired key" });
    }
  } catch (verifyEmailError) {
    console.log("Error verifying email", verifyEmailError);

    res.json({ status: "failed", message: verifyEmailError.message });
  }
};
