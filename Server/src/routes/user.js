const express = require("express");
const { Router } = require('express');
const path = require('path');
const model = require('../model/user.js');

const uploadFile = require('../middleware/multer');

const router = Router();

router.use("/user/image", express.static(path.resolve("./src/uploads")));

router.get('/user', async(req, res)=>{
    let body = req.body;
    try {
        let user = await model.findOne(body);
        req.session.user = user;
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
    let image = req.file;
    let uri = `${req.protocol}://${req.headers.host}/user/image/${image.filename}`;
    res.json({avatar: uri});
});

module.exports = router;