const { Router } = require('express');
const model = require('../model/user.js');
const uploadFile = require('../middleware/multer');

const router = Router();

router.get('/user', async(req, res)=>{
    let body = req.body;
    try {
        let user = await model.findOne(body);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
});

router.post('/user', async(req, res)=>{
    let body = req.body;
    try {
        let user = await model.create(body);
        res.json(user);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
});

router.delete('/user', async (req, res)=>{
    let query = req.query;
    try {
        let user = await model.deleteOne(query);
        res.send('user deleted');
    } catch (error) {
        res.json(error);
    }
})

router.put('/user', async (req, res)=>{
    let query = req.query;
    let body = req.body;
    try {
        let user = await model.updateOne(query, body);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
})

router.post('/user/upload', uploadFile(), (req, res)=>{
    let image = req.files;
    res.send(image);
})
module.exports = router;