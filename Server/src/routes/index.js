const { Router } = require('express');
const { Model } = require('mongoose');
const model = require('../model/task.js');

const router = Router();

router.post('/task', async (req, res)=>{
    let body = req.body;
    try {
        let task = await model.create(body);
        res.json(task);
        
    } catch (error) {
        res.json(error);
    }  
});

router.get('/task', async (req, res)=>{
    let query = req.query;
    try {
        let task = await model.find(query);
        res.json(task);
    } catch (error) {
        res.json(error);
    }
})

router.delete('/task', async (req, res)=>{
    let query = req.query;
    try {
        let taskDelete = await model.deleteMany(query);
        res.json(taskDelete);
    } catch (error) {
        res.send(error);
    }
})

module.exports =  router;
