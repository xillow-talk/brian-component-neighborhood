DROP DATABASE IF EXISTS neighborhood;

CREATE DATABASE neighborhood;

USE neighborhood;

CREATE TABLE zip (
  id INT AUTO_INCREMENT,
  code INT,
  walk_score INT,
  transit_score INT,
  PRIMARY KEY (id)
);

CREATE TABLE property (
  id INT AUTO_INCREMENT,
  address1 VARCHAR(64),
  city VARCHAR(64),
  zip_id INT,
  price INT,
  bed_count INT,
  bath_count INT,
  pic_count INT,
  house_status BOOLEAN default 0,
  PRIMARY KEY (id),
  FOREIGN KEY (zip_id) REFERENCES zip(id)
);





