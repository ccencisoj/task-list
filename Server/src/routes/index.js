const { Router } = require('express');
const model = require('../model/task.js');

const router = Router();

router.post('/user', async (req, res)=>{
    let body = req.body;
    try {
        let task = await model.create(body);
        res.json(task);
        
    } catch (error) {
        res.json(error);
    }  
});

module.exports =  router;