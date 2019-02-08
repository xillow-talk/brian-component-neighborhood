DROP DATABASE neighborhood;

CREATE DATABASE neighborhood;

USE neighborhood;

CREATE TABLE property (
  id INT AUTO_INCREMENT,
  address1 VARCHAR(32),
  city VARCHAR(32),
  zip INT,
  price INT,
  bed_count INT,
  bath_count INT,
  pic_count INT,
  house_status BOOLEAN default 0,
  PRIMARY KEY (id)
);

CREATE TABLE location (
  id INT AUTO_INCREMENT,
  property_id INT,
  zip INT,
  walk_score INT,
  transit_score INT,
  PRIMARY KEY (id),
  FOREIGN KEY (property_id) REFERENCES property(id)
)