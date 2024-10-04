const express = require('express');  // Importing Express.js
const app = express();  // Initializing an Express application

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About Route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

// Handle 404 Errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
