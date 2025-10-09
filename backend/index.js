const express = require('express');
const app = express();
const PORT = 3000;

// Serve a simple homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my sample Express page!</h1><p>Running on port 3000</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
