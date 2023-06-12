const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator')

require('dotenv').config();

const app = express();

app.use(cors())
app.use(expressValidator())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Origin, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


const routes = require('./src/routes/api');
app.use(routes);


app.listen(process.env.PORT);