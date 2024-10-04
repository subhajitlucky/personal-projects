const http = require('http');  // Importing http module

const server = http.createServer((req, res) => {
  if (req.url === '/') {  // Route for Home page
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page\n');
  } else if (req.url === '/about') {  // Route for About page
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page\n');
  } else if (req.url === '/contact') {  // Route for Contact page
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact Page\n');
  } else {  // If route not found, send 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
