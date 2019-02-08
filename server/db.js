const mysql = require('mysql');
const { config } = require('../mySQLLogin')

const connection = mysql.createConnection({
  user: config.user,
  password: config.password,
  database: 'neighborhood',
});
connection.connect();

const getProp = (callback) => {
  connection.query('SELECT * FROM property', (err, data) => {
    if (err) {
      callback('THIS DID NOT WORK');
    } else {
      callback(null, data);
    }
  });
};

const getLoc = (callback) => {
  connection.query('SELECT * FROM location', (err, data) => {
    if (err) {
      callback('THIS DID NOT WORK');
    } else {
      callback(null, data);
    }
  });
};

module.exports.getProp = getProp;
module.exports.getLoc = getLoc;
