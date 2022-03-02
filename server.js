const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.get('/about', function(req, res) {
  fs.readFile('about.html', (err, data) => {
    res.write(data);
    return res.end();
  });
})

app.get('/contact', function(req, res) {
  fs.readFile('contact-me.html', (err, data) => {
    res.write(data);
    return res.end();
  });
})
app.get('/', function(req, res) {
  fs.readFile('index.html', (err, data) => {
    res.write(data);
    return res.end();
  });
})
app.all('*', function(req, res) {
  fs.readFile('404.html', (err, data) => {
    res.write(data);
    return res.end();
  });
})


app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
