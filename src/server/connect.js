var mysql = require('mysql');

var dbConfig = mysql.createConnection({
  host: 'localhost', 
  user: 'new_user',
  database: 'form',
  password: 'new_password'
});

dbConfig.connect(err => err ? console.error('Error connecting to the database ✕ :', err) : console.log('Connected to the database[form] ✓'));

module.exports = dbConfig;