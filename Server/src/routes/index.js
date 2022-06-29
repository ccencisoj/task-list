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
    try {
        let task = await model.find();
        res.json(task);
    } catch (error) {
        
    }
})

module.exports =  router;