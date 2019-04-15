const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'ec2-54-228-252-67.eu-west-1.compute.amazonaws.com',
    user: 'ntpyhvvoiapxew',
    password: '8295ccc429a9e0a866ae2abc0b3c25dba047cf8cdcfc4aeda8ee1e69a728b451',
    database: 'd3ga8vvfeak3hh',
};


 // Create a MySQL pool
 const pool = mysql.createPool(config); 

// Export the pool
module.exports = pool;