const authService = require('../services/authService');
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');  // Folder where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Creating a unique file name
  },
});

const upload = multer({ storage: storage });

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await authService.authenticateUser(email, password);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Register new user with image upload and companyName
const registerUser = async (req, res) => {
  const { fullName, email, password, companyName } = req.body;
  const imagePath = req.file ? req.file.path : ''; // Get image path from multer upload

  try {
    const newUser = await authService.registerUser(fullName, email, password, companyName, imagePath);
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.fullName,
        email: newUser.email,
        companyName: newUser.companyName,
        imagePath: newUser.imagePath,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { loginUser, registerUser, upload };
