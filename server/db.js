const mysql = require('mysql');
const { config } = require('../mySQLLogin');

const connection = mysql.createConnection({
  user: config.user,
  password: config.password,
  database: 'neighborhood',
});
connection.connect();

const getProp = (info, callback) => {
  connection.query(`SELECT * FROM property WHERE id = ${info}`, (err, data) => {
    if (err) {
      callback('THIS DID NOT WORK');
    } else {
      callback(null, data);
    }
  });
};

const getAllProp = (callback) => {
  connection.query('SELECT * FROM property WHERE id < 15', (err, data) => {
    if (err) {
      callback('THIS DID NOT WORK');
    } else {
      callback(null, data);
    }
  });
};

const getLoc = (info, callback) => {
  connection.query(`SELECT * FROM zip WHERE id = ${info}`, (err, data) => {
    if (err) {
      callback('THIS DID NOT WORK');
    } else {
      callback(null, data);
    }
  });
};

module.exports.getProp = getProp;
module.exports.getAllProp = getAllProp;
module.exports.getLoc = getLoc;
