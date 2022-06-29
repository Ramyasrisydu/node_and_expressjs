var mysql=require('mysql');
//local mysql db connection
const pool = mysql.createPool({
host : 'localhost',
user : 'root',
password : '',
database : 'aids'
});

module.exports = pool;