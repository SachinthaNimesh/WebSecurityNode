const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, HTTP World!');
});

const localip = '127.0.0.1';
app.listen(port,{localip}, () => {
  console.log(`HTTP server running on http://${localip}:${port}`);
});
