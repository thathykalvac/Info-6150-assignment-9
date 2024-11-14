import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import LoginPage from './Input/LoginPage';
import Home from './Todos/Home';  // Import pages
import About from './Todos/AboutPage';
import JobListings from './Todos/JobListingsPage';
import Contact from './Todos/ContactPage';
import CompanyShowcase from './Todos/CompanyShowcase';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Protecting routes with PrivateRoute */}
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}
        />
        <Route
          path="/about"
          element={<PrivateRoute element={<About />} />}
        />
        <Route
          path="/job-listings"
          element={<PrivateRoute element={<JobListings />} />}
        />
        <Route
          path="/contact"
          element={<PrivateRoute element={<Contact />} />}
        />
        <Route
          path="/company-showcase"
          element={<PrivateRoute element={<CompanyShowcase />} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
