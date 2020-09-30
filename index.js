const express = require('express');
const fs = require('fs');


const app = express();

app.get('/', (req, res) => {
  fs.readFile(__dirname + '/index.html', 'utf8', (err, text) => {
      res.send(text);
  });
});


const port = 8080;
app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log('server on port', port);
  }
})