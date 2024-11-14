const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user'); // Assuming this is your User model
const userRouter = require('./routes/userRoutes'); // User routes

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Welcome Route
app.get('/', (req, res) => {
  res.send('Welcome to the Job Portal API!');
});

// Register new user route
app.use('/api', userRouter);

// Serve uploaded images from "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API endpoint to get company details dynamically
app.get('/api/companies', async (req, res) => {
  try {
    const usersWithCompanies = await User.find({ companyName: { $ne: null }, image: { $ne: null } })
      .select('companyName image'); // Select only necessary fields

    const companies = usersWithCompanies.map(user => ({
      name: user.companyName,
      imageUrl: `http://localhost:${PORT}/${user.image.replace(/\\/g, '/')}` // Serve image dynamically
    }));

    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching companies' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
