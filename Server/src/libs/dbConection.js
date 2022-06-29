const mongoose = require('mongoose');

let db;
const DB = mongoose.connection;
let uri = 'mongodb://localhost:27017/tasks';
module.exports = () =>{
    if (!db) {
        db = mongoose.connect(uri);
        DB.once("open", () => {
            console.log(`The databases is conectec for the port ${uri}`);
        });
        return db;
    } else {
        return db;
    }
}