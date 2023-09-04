const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "zavrsni",
  password: "bazepodataka",
  port: 5432,
});  

const sql_create_korisnik = `
CREATE TABLE Korisnik
(
  ime VARCHAR(30) NOT NULL,
  prezime VARCHAR(30) NOT NULL,
  datumRod DATE NOT NULL,
  spol VARCHAR(1) NOT NULL,
  visina FLOAT NOT NULL,
  tezina FLOAT NOT NULL,
  email VARCHAR(90) NOT NULL,
  lozinka VARCHAR(90) NOT NULL,
  username VARCHAR(90) NOT NULL,
  idKorisnika SERIAL PRIMARY KEY
);
`;

const sql_create_mjerenje = `
    
CREATE TABLE Mjerenje
(
  idMjerenja SERIAL PRIMARY KEY,
  datumVrijeme TIMESTAMP NOT NULL,
  vrijednost FLOAT NOT NULL,
  biljeska TEXT NOT NULL,
  idKorisnika INT NOT NULL,
  FOREIGN KEY (idKorisnika) REFERENCES Korisnik(idKorisnika)
);
`;

const sql_create_lijek= `
CREATE TABLE Lijek
(
  idLijeka SERIAL PRIMARY KEY,
  naziv VARCHAR(90) NOT NULL,
  doza FLOAT NOT NULL,
  datumPocetka DATE NOT NULL,
  datumKraja DATE NOT NULL
);
`;

const sql_create_savjet = `

CREATE TABLE Savjet
(
  idSavjeta SERIAL PRIMARY KEY,
  datumVrijeme TIMESTAMP NOT NULL,
  sadrzaj TEXT NOT NULL,
  idKorisnika INT NOT NULL,
  idMjerenja INT NOT NULL,
  FOREIGN KEY (idKorisnika) REFERENCES Korisnik(idKorisnika),
  FOREIGN KEY (idMjerenja) REFERENCES Mjerenje(idMjerenja)
);
`;

const sql_create_izvor = `
    
CREATE TABLE Izvor
(
  idIzvora SERIAL PRIMARY KEY,
  url VARCHAR(90) NOT NULL,
  naziv VARCHAR(90) NOT NULL,
  opis VARCHAR(90) NOT NULL
);

`;

const sql_create_uzima = `
    
CREATE TABLE uzima
(
  idKorisnika INT NOT NULL,
  idLijeka INT NOT NULL,
  PRIMARY KEY (idKorisnika, idLijeka),
  FOREIGN KEY (idKorisnika) REFERENCES Korisnik(idKorisnika),
  FOREIGN KEY (idLijeka) REFERENCES Lijek(idLijeka)
);
`;

const sql_create_ima = `
    
CREATE TABLE ima
(
  idIzvora INT NOT NULL,
  idSavjeta INT NOT NULL,
  PRIMARY KEY (idIzvora, idSavjeta),
  FOREIGN KEY (idIzvora) REFERENCES Izvor(idIzvora),
  FOREIGN KEY (idSavjeta) REFERENCES Savjet(idSavjeta)
);
`;

let tables = [
  sql_create_korisnik,
  sql_create_mjerenje,
  sql_create_lijek,
  sql_create_savjet,
  sql_create_izvor,
  sql_create_uzima,
  sql_create_ima
];


let table_names = [
  "Korisnik",
  "Mjerenje",
  "Lijek",
  "Savjet",
  "Izvor",
  "uzima",
  "ima"
];

(async () => {
  console.log("Creating tables");
  for (let i = 0; i < tables.length; i++) {
    console.log("Creating table " + table_names[i] + ".");
    try {
      await pool.query(tables[i], []);
      console.log("Table " + table_names[i] + " created.");
    } catch (err) {
      console.log("Error creating table " + table_names[i]);
      return console.log(err.message);
    }
  }

  await pool.end();
})`

`;

