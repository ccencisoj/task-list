const express = require('express');
const { join, dirname } = require('path');
const { fileURLToPath } = require('url');
const bodyParse = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Middleware 
app.use(logger('dev'));
app.use(bodyParse.urlencoded({extended:false}));

//routers 

app.use(indexRouter)


//settings server
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.listen(app.get('port'), () =>{
    console.log('Puerto '+app.get('port')+' a la escucha');
});