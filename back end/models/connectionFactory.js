var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ilibras'
    });
}

module.exports = function(){
    return createDBConnection;
}