console.log(process.env.NAME);

const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const port = process.env.PORT || 4000;

const app = express();

//Middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routers 
app.use(indexRouter);

//settings server
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});