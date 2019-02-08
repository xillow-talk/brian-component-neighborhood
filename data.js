var faker = require('faker');
const mysql = require('mysql');
const {config} = require('./mySQLLogin.js')

var pool = mysql.createPool({
  connectionLimit:10,
  user: 'root',
  password: config.password,
  database: 'neighborhood'
})

let run = () => {
  for(var i = 0; i < 100; i++){

  
var randomNum = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

var random = (num) =>{
  return Math.ceil(Math.random() * num)
};

var randomStatus = () =>{
  if(Math.random() > 0.50){
    return 0
  } else {
    return 1
  }
}

var  property = {
  address1: faker.address.streetAddress(),
  city: faker.address.city(),
  zip: randomNum(94500,94600),
  price: randomNum(600000,1500000),
  bed_count: random(7),
  bath_count: random(4),
  pic_count: random(30),
  house_status: randomStatus()
}

var {address1, city, zip, price, bed_count,bath_count,pic_count, house_status} = property

var location = {
  property_id: randomNum(1,100),
  zip: randomNum(94500,94600),
  walk_score: randomNum(50,10),
  transit_score: randomNum(50,100),
}

var {property_id, zip, walk_score, transit_score} = location

  pool.query(`INSERT into property(address1, city, zip, price, bed_count, bath_count, pic_count, house_status) VALUES('${address1}','${city}',${zip},${price},${bed_count},${bath_count},${pic_count},${house_status})`, (err,data) => {
    if(err) {
      console.log(err)
    } else {
      console.log('YAY PROPERTY ARE IN THE DB')
    }
  })

  pool.query(`INSERT into location(property_id, zip, walk_score, transit_score) VALUES(${property_id},${zip},${walk_score},${transit_score})`, (err,data) => {
    if(err) {
      console.log(err)
    } else {
      console.log('YAY THE LOCATIONS ARE IN THE DB')
    }
  })

  }
}
run()

