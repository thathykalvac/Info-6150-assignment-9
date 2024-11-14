// src/Input/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use React Router for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email, 
        password
      });

      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      // Redirect to job listings page
      navigate('/home'); // Use navigate from react-router-dom for client-side routing
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error occurred');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        {/* Display error message if login fails */}
        {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}
        
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            autoFocus
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '100%' }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
