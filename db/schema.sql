DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    created_at DATETIME NOT NULL,
    PRIMARY KEY(id)
);