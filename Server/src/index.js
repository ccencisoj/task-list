console.log(process.env.NAME);

const express = require('express');
const logger = require('morgan');
const taskRouter = require('./routes/task');
const userRouter = require('./routes/user');
const dbConection = require('./libs/dbConection');
const port = process.env.PORT || 4000;
const cors = require("cors");

const app = express();
//Conection with database mongoDB
let db = dbConection()

//Middleware 
app.use(cors({
    origin: ["http://192.168.100.6:3000"],
    credentials: true
}));
app.use(express.json());
app.use(logger('dev'))
app.use(express.urlencoded({extended: false}));

//routers 
app.use(taskRouter);
app.use(userRouter);

//settings server
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});