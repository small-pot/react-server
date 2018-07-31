var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: '10.165.149.59',
    user: 'ysftest',
    password: '7TwvP32x',
    database:'yixun-yunshangfu',
    prot:6000
});
console.log(connection)
connection.connect();