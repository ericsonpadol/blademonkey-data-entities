const DB = require('./config/db');

// connect to database
DB.connectDB();

module.exports = DB;
