const mongoose = require('mongoose');
const db = require('../libs/dbConection.js');



module.exports = () => {
    const Schema = mongoose.Schema;
    let task = Schema({
        title: String,
        status: Boolean
    });

    return db.model('tasks', task);
};