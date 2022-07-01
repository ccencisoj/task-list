const router = require("express").Router();
const auth = require("../helpers/auth");
const types = require("../types");
const Task = require("../models/Task");
const validate = require("../helpers/validate");

router.get("/task/list", 
auth.required(), 
async (req, res)=> {
  const user = req.session.user;
  const taskList = await Task.find({user: user.id});
  res.json({taskList});
});

router.post("/task/create",
auth.required(), 
validate.body({
  title: types.string().min(1).required(),
  description: types.string().min(1).required()
}),  
async (req, res)=> {
  const user = req.session.user;
  const task = await Task.create({...req.body, user: user.id});
  res.json({task});
});

router.delete("/task?taskId", 
auth.required(),
validate.query({taskId: types.objectId.required()}),
async (req, res)=> {
  const taskId = req.query.taskId;
  const user = req.session.user;
  const results = await Task.deleteOne({user: user.id, id: taskId});
  res.json({success: true});
});

module.exports = router;