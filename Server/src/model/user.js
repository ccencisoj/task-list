const {Schema, model } = require('mongoose');

let user = new Schema({
    id: Number,
    img: String,
    name: String,
    email: String
})
    

module.exports =  model('user', user);;