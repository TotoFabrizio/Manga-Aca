DROP DATABASE IF EXISTS mangaAca;
CREATE DATABASE mangaAca;
USE mangaAca;
CREATE TABLE users(
   id INT(10) AUTO_INCREMENT NOT NULL,
   userName VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(60) NOT NULL,
   admin INT(1) NOT NULL DEFAULT 0,
   PRIMARY KEY(id)
);
CREATE TABLE genre(
    id INT(10) AUTO_INCREMENT NOT NULL,
    genre VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE product(
    id INT(10) AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE prodGenre(
    id INT(10) AUTO_INCREMENT NOT NULL,
    prod_id INT(10) NOT NULL,
    genre_id INT(10) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (prod_id) REFERENCES product (id),
    Foreign Key (genre_id) REFERENCES genre (id)
);
CREATE TABLE volumeProd(
    id INT(10) AUTO_INCREMENT NOT NULL,
    volume INT(5) NOT NULL,
    img VARCHAR(100) NOT NULL,
    prod_id INT(10) NOT NULL,
    deleted TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY(id),
    Foreign Key (prod_id) REFERENCES product (id)
);
INSERT INTO
  users
VALUES(
    DEFAULT,
    "Toto Fabrizio",
    "tomas.fabrizio02@gmail.com",
    "$2a$10$Dg4juHqOZihiPlDd6aUlQuH.LLuQCFYYvMZJQ0sqJmCEzWDcc9cVu",
    1
  );
INSERT INTO
  genre
VALUES(DEFAULT, "Acción"),
  (DEFAULT, "Comedia"),
  (DEFAULT, "Romance"),
  (DEFAULT, "Slice of life"),
  (DEFAULT, "Fantasia");
INSERT INTO
    product
VALUES(
    DEFAULT,
    "Spy X Family",
    "Familia loca",
    4000
    );
INSERT INTO
    prodgenre
VALUES(DEFAULT,1,1),
(DEFAULT,1,2);
INSERT INTO volumeProd
values(
  DEFAULT,
  1,
  "/images/spyxfamily01.jpg",
  1,
  DEFAULT
),
(
  DEFAULT,
  2,
  "/images/spyxfamily02.jpg",
  1,
  DEFAULT
),
(
  DEFAULT,
  3,
  "/images/spyxfamily03.jpg",
  1,
  DEFAULT
),
(
  DEFAULT,
  4,
  "/images/spyxfamily04.jpg",
  1,
  DEFAULT
),
(
  DEFAULT,
  5,
  "/images/spyxfamily05.jpg",
  1,
  DEFAULT
),
(
  DEFAULT,
  6,
  "/images/spyxfamily06.jpg",
  1,
  DEFAULT
);