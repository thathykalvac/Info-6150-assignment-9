const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env

const userRouter = require('./routes/userRoutes'); // Assuming this is where the user routes are defined

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

// Register new user route - ensure this is correctly routed
app.use('/api', userRouter);  // Mounting userRouter to handle /register and other user-related routes

// Serve static images from "images" folder inside "api"
app.use('/images', express.static(path.join(__dirname, 'images')));

// API endpoint to get company details
app.get('/api/companies', (req, res) => {
  const companies = [
    {
      id: 1,
      name: 'Tech Solutions Ltd.',
      imageUrl: 'http://localhost:3000/images/tech-solutions.jpeg',
    },
    {
      id: 2,
      name: 'Creative Corp.',
      imageUrl: 'http://localhost:3000/images/creative-corp.png',
    },
    {
      id: 3,
      name: 'Design Innovators Inc.',
      imageUrl: 'http://localhost:3000/images/design-innovators.png',
    },
    {
      id: 4,
      name: 'Green Energy Solutions',
      imageUrl: 'http://localhost:3000/images/green-energy.jpeg',
    },
    {
      id: 5,
      name: 'Health Tech Co.',
      imageUrl: 'http://localhost:3000/images/health-tech.png',
    },
    {
      id: 6,
      name: 'Smart Homes Inc.',
      imageUrl: 'http://localhost:3000/images/smart-homes.jpeg',
    },
  ];
  res.json(companies);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
