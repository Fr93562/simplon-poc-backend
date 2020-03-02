'user strict';

/**
 *  Initalise la connexion avec la base de données
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'messagerie'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;