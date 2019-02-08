const mysql = require('require');
const connection = mysql.createConnection({
  user: 'root',
  password: 'yourpassword',
  database: 'neighborhood'
})
connection.conect()

let getProp = (callback) => {
  connection.query('SELECT * FROM property', (err, data) => {
    if(err) {
      callback('THIS DID NOT WORK');
      return;
    } else {
      callback(null, data)
      return;
    }
  })
}

let getLoc = (callback) => {
  connection.query('SELECT * FROM location', (err, data) => {
    if(err) {
      callback('THIS DID NOT WORK');
      return;
    } else {
      callback(null, data)
      return;
    }
  })
}

module.exports.getProp = getProp
module.exports.getLoc = getLoc
