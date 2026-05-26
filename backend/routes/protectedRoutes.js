const express = require("express");

const {
  protect,
  adminOnly,
  supervisorOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();


// Protected Route
router.get("/profile", protect, (req, res) => {

  res.status(200).json({
    message: "Protected profile accessed",
    user: req.user,
  });

});


// Admin Route
router.get("/admin", protect, adminOnly, (req, res) => {

  res.status(200).json({
    message: "Welcome Admin",
  });

});


// Supervisor Route
router.get("/supervisor", protect, supervisorOnly, (req, res) => {

  res.status(200).json({
    message: "Welcome Supervisor",
  });

});


module.exports = router;