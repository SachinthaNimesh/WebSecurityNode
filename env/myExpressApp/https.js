const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 3443;
const localip = '127.0.0.1';

// SSL Certificates
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

app.get('/', (req, res) => {
  res.send('Hello, HTTPS World!');
});

https.createServer(options, app).listen(port,{localip}, () => {
  console.log(`HTTPS server running on https://${localip}:${port}`);
});
