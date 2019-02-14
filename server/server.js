const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { getProp, getAllProp, getLoc } = require('./db');

const serve = express.static('./public/dist');
app.use(serve);

app.use(bodyParser.json());

app.get('/property/:propertyid', (req, res) => {
  const propId = req.params.propertyid;
  getProp(propId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(202).send(data);
    }
  });
});

app.get('/property', (req, res) => {
  getAllProp((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(202).send(data);
    }
  });
});

app.get('/location/:locationid', (req, res) => {
  const locInfo = req.params.locationid;
  getLoc(locInfo, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(202).send(data);
    }
  });
});

app.listen(port, () => console.log('LISTENING TO PORT ANDRE 3000'));
