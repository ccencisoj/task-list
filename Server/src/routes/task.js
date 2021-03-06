const { Router } = require('express');
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
        let taskDelete = await model.deleteOne(query);
        res.json(taskDelete);
    } catch (error) {
        res.send(error);
    }
})

router.put('/task', async (req, res)=>{
    let body = req.body;
    let query = req.query;
    try {
        let taskUpdate = await model.updateOne(query, body);
        res.json(taskUpdate);
    } catch (error) {
        res.send(error);
    }
})

module.exports =  router;
