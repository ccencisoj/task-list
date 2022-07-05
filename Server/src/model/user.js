const {Schema, model } = require('mongoose');

let user = new Schema({
    id: Number,
    avatar: String,
    name: String,
    email: String
})
    

module.exports =  model('user', user);;