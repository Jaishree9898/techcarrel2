const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Create MySQL connection pool
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Jaishree98$',
  database: 'loginform',
});

// Middleware
app.use(cors());
app.use(express.json());

// Signup endpoint
app.post('/api/users', (req, res) => {
  const { userid, emailid, contact, password } = req.body;

  if (!userid || !emailid || !contact || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO signupdata(userid, emailid, contact, password) VALUES (?, ?, ?, ?)';
  connection.query(query, [userid, emailid, contact, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err.message);
      return res.status(500).json({ message: `Error: ${err.message}` });
    }
    res.json({ message: 'User registered successfully' });
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { userid, password } = req.body;

  if (!userid || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'SELECT * FROM signupdata WHERE userid = ? AND password = ?';
  connection.query(query, [userid, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err.message);
      return res.status(500).json({ message: `Error: ${err.message}` });
    }

    if (results.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
