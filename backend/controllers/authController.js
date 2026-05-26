const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};


// REGISTER USER
const registerUser = async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    // Validation
    if (!name || !email || !password || !role) {

      return res.status(400).json({
        message: "All fields are required",
      });

    }

    // Password Length
    if (password.length < 6) {

      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });

    }

    // Check Existing Email
    const userExists = await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({
        message: "Email already exists",
      });

    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      message: "User registered successfully",

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });

  }
};


// LOGIN USER
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Validation
    if (!email || !password) {

      return res.status(400).json({
        message: "Email and password are required",
      });

    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(401).json({
        message: "Invalid email or password",
      });

    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid email or password",
      });

    }

    // Generate Token
    const token = generateToken(user._id, user.role);

    res.status(200).json({
      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });

  }
};


// LOGOUT USER
const logoutUser = async (req, res) => {

  res.status(200).json({
    message: "Logout successful",
  });

};


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};