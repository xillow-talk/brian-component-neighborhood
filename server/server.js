const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let {getProp, getLoc} = require('./db')

const serve = express.static('./public/dist')
app.use(serve)

app.use(bodyParser.json())

app.get('/property', (req, res) => {
  getProp((err, data) => {
    if(err) {
      res.sendStatus(404)
    } else {
      res.status(202).send(data)
    }
  })
})

app.get('/location', (req, res) => {
  getLoc((err, data) => {
    if(err) {
      res.sendStatus(404)
    } else {
      res.status(202).send(data)
    }
  })
})

app.listen(port,() => {
  console.log('LISTENING TO PORT ANDRE 3000')
})