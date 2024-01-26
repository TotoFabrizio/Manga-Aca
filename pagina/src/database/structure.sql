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
    volume INT(5) NOT NULL,
    price DECIMAL NOT NULL,
    img VARCHAR(100) NOT NULL,
    visible TINYINT(1) NOT NULL DEFAULT 0,
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
    1,
    4000,
    "/images/spyxfamily01.jpg",
    DEFAULT
    ),
    (
    DEFAULT,
    "Spy X Family",
    "Familia loca",
    2,
    4000,
    "/images/spyxfamily02.jpg",
    DEFAULT
    ),
    (
    DEFAULT,
    "Spy X Family",
    "Familia loca",
    3,
    4000,
    "/images/spyxfamily03.jpg",
    DEFAULT
    ),
    (
    DEFAULT,
    "Spy X Family",
    "Familia loca",
    4,
    4000,
    "/images/spyxfamily04.jpg",
    DEFAULT
    ),
    (
    DEFAULT,
    "Spy X Family",
    "Familia loca",
    5,
    4000,
    "/images/spyxfamily05.jpg",
    DEFAULT
    ),
    (
    DEFAULT,
    "Spy X Family",
    "Familia loca",
    6,
    4000,
    "/images/spyxfamily06.jpg",
    DEFAULT
    );
INSERT INTO
    prodgenre
VALUES(DEFAULT,1,1),
(DEFAULT,1,2),
(DEFAULT,2,1),
(DEFAULT,2,2),
(DEFAULT,3,1),
(DEFAULT,3,2),
(DEFAULT,4,1),
(DEFAULT,4,2),
(DEFAULT,5,1),
(DEFAULT,5,2),
(DEFAULT,6,1),
(DEFAULT,6,2);