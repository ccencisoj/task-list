const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const dbConection = require('./libs/dbConection');
const port = process.env.PORT || 4000;

const app = express();
//Conection with database mongoDB
let db = dbConection()

//Middleware 
app.use(express.json());
app.use(logger('tiny'))
app.use(express.urlencoded({extended: false}));

//routers 
app.use(indexRouter);

//settings server
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});