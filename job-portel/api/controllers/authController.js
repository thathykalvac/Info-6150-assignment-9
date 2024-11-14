// controllers/authController.js
const authService = require('../services/authService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token, user } = await authService.authenticateUser(email, password);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { loginUser };
