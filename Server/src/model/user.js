const {Schema, model } = require('mongoose');

module.exports = () => {
    let user = new Schema({
        id: Number,
        userName: String,
        email: String
    })

    return model('user', user);
}