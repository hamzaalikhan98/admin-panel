const jwt = require("jsonwebtoken");
const User = require("../models/User");


// PROTECT ROUTES
const protect = async (req, res, next) => {

  let token;

  try {

    // Check token in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {

      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from database
      req.user = await User.findById(decoded.id).select("-password");

      next();

    } else {

      return res.status(401).json({
        message: "No token provided",
      });

    }

  } catch (error) {

    return res.status(401).json({
      message: "Invalid token",
    });

  }
};


// ADMIN ONLY
const adminOnly = (req, res, next) => {

  if (req.user && req.user.role === "admin") {

    next();

  } else {

    return res.status(403).json({
      message: "Admin access only",
    });

  }
};


// SUPERVISOR ONLY
const supervisorOnly = (req, res, next) => {

  if (req.user && req.user.role === "supervisor") {

    next();

  } else {

    return res.status(403).json({
      message: "Supervisor access only",
    });

  }
};


module.exports = {
  protect,
  adminOnly,
  supervisorOnly,
};