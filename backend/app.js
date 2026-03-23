const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rota base
app.get('/', (req, res) => {
  res.status(200).json({ 
    maintenance: false,
    message: 'Welcome to the API' 
  });
});

// Middleware 404
app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
    error: 'The requested resource could not be found.'
  });
});

module.exports = app;