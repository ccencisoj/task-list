const {Schema, model } = require('mongoose');

let user = new Schema({
    id: Number,
    imgUser: String,
    userName: String,
    email: String
})
    

module.exports =  model('user', user);;