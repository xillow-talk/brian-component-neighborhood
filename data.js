const faker = require('faker');
const mysql = require('mysql');
const { config } = require('./mySQLLogin.js');

const pool = mysql.createPool({
  connectionLimit: 10,
  user: config.user,
  password: config.password,
  database: 'neighborhood',
});

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const random = num => Math.ceil(Math.random() * num);

const randomStatus = () => {
  if (Math.random() > 0.50) {
    return 0;
  }
  return 1;
};
const randomZip = () => {
  if (Math.random() > 0.50) {
    return 1;
  }
  return 2;
};
const zipNum = (num) => {
  if (num === 0) {
    return 94595;
  }
  return 94596;
};

const run = () => {
  for (let j = 0; j < 2; j++) {
    const zip = {
      code: zipNum(j),
      walk_score: randomNum(50, 101),
      transit_score: randomNum(50, 101),
    };
    let { code, walk_score, transit_score } = zip;
    pool.query(`INSERT into zip(code, walk_score, transit_score) VALUES(${code},${walk_score},${transit_score})`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('YAY THE LOCATIONS ARE IN THE DB')
      }
    });
  };
  
  for (let i = 0; i < 100; i++) {
    const randomPriceNum = randomNum(600000, 2000000);
    const priceNum = randomPriceNum.toLocaleString()

    const randomSfNum = randomNum(2000, 6000);
    const sFNum = randomSfNum.toLocaleString()

    const property = {
      address1: faker.address.streetAddress(),
      city: faker.address.city(),
      zip_id: randomZip(),
      price: priceNum,
      bed_count: random(7),
      bath_count: random(4),
      pic_count: random(30),
      house_status: randomStatus(),
      sqft: sFNum,
    };
    let { address1, city, zip_id, price, bed_count,bath_count, pic_count, house_status, sqft } = property;

    pool.query(`INSERT into property(address1, city, zip_id, price, bed_count, bath_count, pic_count, house_status, sqft) VALUES("${address1}","${city}",${zip_id}, "${price}",${bed_count},${bath_count},${pic_count},${house_status}, "${sqft}")`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('YAY PROPERTY ARE IN THE DB');
      }
    });
  }
};
run();

