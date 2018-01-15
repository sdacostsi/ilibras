var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'mydbilibras.ccobzmnzlwis.us-west-2.rds.amazonaws.com', //'127.0.0.1',
        user: 'ilibras',//'root',
        password: 'Si261483',
        database: 'ilibras'
    });
}

module.exports = function(){
    return createDBConnection;
}