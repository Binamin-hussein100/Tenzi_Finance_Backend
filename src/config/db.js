const sqlite3 = require('sqlite3');
const db = new sqlite3.Database("tenzifinance");

const User = db.serialize(()=>{
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT)');
})

module.exports = User 

 