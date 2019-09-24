require('newrelic');

const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 8080;

// Middlewares
app.use(proxy('/houses/cassandra/', {target: 'http://localhost:3010/'}));
// app.use(proxy('/house', {target: 'http://localhost:8081/'}));
// app.use(proxy('/reviews', {target: 'http://localhost:5000/'}));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
