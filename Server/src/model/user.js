const {Schema, model } = require('mongoose');

module.exports = () => {
    let user = new Schema({
        id: Number,
        imgUser: String,
        userName: String,
        email: String
    })

    return model('user', user);
}