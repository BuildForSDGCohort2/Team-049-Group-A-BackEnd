/**
 * Add all routes here
 */

const express = require("express");
const router = new express.Router();

const baseController = require("../controllers/baseController");
const RegisterController = require("../controllers/auth/RegisterController");
const VerifyEmail = require("../controllers/auth/VerifyEmail");
const AdminLoginController = require("../controllers/admin/AdminLoginController");
const UserLogin = require("../controllers/auth/UserLogin");
const ForgotPassword = require("../controllers/auth/ForgotPassword");
const ResetPassword = require("../controllers/auth/ResetPassword");

router.get("/", baseController.renderData);
router.post("/user/register", RegisterController.registerUser);
router.get("/user/verify/email/:key", VerifyEmail.verifyEmail);
router.put("/user/forgot-password", ForgotPassword.forgotPassword);
router.put("/user/reset-password", ResetPassword.resetPassword);
// Admin Routes
router.post("/admin/login", AdminLoginController.loginAdmin);
// User Routes
router.post("/user/login", UserLogin.loginUser);
router.post("/user/forgot-password", ForgotPasswordController.forgotPassword);

// not found route
router.use((req, res, next) => {
  if (!req.route) {
    res.status(404).json({
      status: "not-found",
      message: "The page you're looking for was not found",
    });
  }
});

module.exports = router;
