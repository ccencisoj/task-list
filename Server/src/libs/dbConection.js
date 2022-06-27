const mongoose = require('mongoose');

let db;

module.exports = () =>{
    if (!db) {
        db = mongoose.connect('mongodb:/localhost:27017');
        return db;
    } else {
        return db;
    }
}