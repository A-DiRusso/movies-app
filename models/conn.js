const pgp = require('pg-promise')();

const options = {
    host: 'localhost',
    database: 'movies-app'
}

const db = pgp(options);
module.exports = db;