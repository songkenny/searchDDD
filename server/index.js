const express = require('express');
const https = require('https');
const fs = require('fs');

const db = require('../database/index.js');

const app = express();

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/search/:lat/:long', (req, res) => {
  const {lat, long} = req.params;
  db.findWithin5(lat, long)
    .then((data) => res.status(200).send(data.records))
    .catch((err) => console.log(err));
});

https.createServer(options, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})