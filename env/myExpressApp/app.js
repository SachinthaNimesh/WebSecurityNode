const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, HTTP World!');
});

app.listen(port, () => {
  console.log(`HTTP server running on http://localhost:${port}`);
});
