const { Router } = require('express');
const { Model } = require('mongoose');
const model = require('../model/task.js');

const modelMongo = model();
const router = Router();

router.get('/', (req, res)=>{
    modelMongo.find({}, (err, tasks)=>{
        if (err) {
            throw err;
        } else {
            res.render('index')
        }
    })
});

module.exports =  router;








