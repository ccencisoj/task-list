const router = require("express").Router();
const auth = require("../helpers/auth");
const types = require("../types");
const Task = require("../models/Task");
const validate = require("../helpers/validate");
const { PENDING_STATE } = require("../constants/task");

router.get("/all", 
auth.required(), 
async (req, res)=> {
  const user = req.session.user;
  const taskList = await Task.find({user: user.id}).sort({$natural:-1});
  res.json({taskList});
});

router.post("/create",
auth.required(), 
validate.body({
  title: types.string().min(1).required(),
  description: types.string().min(0).optional()
}),  
async (req, res)=> {
  const user = req.session.user;
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    state: PENDING_STATE,
    user: user.id
  });
  res.json({task});
});

router.get("/",
auth.required(),
async (req, res)=> {
  const taskId = req.query.id;
  const task = await Task.findOne({_id: taskId});
  res.json({task});
});

router.put("/", 
auth.required(),
validate.query({
  id: types.objectId.required()
}),
validate.body({
  title: types.string().min(1).optional(),
  description: types.string().min(0).optional(),
  state: types.taskState.optional()
}),
async (req, res)=> {
  const user = req.session.user;
  const taskId = req.query.id;
  const values = req.body;
  await Task.updateOne({_id: taskId, user: user.id}, values);
  res.json({updated: true});
});

router.delete("/", 
auth.required(),
validate.query({id: types.objectId.required()}),
async (req, res)=> {
  const user = req.session.user;
  const taskId = req.query.id;
  await Task.deleteOne({_id: taskId, user: user.id});
  res.json({deleted: true});
});

module.exports = router;