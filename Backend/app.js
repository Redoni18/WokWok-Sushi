const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

require('dotenv').config();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Wok-Wok API",
            description: "Wok-Wok Administrator API",
            contact: {
                name: "Redon Emini",
            },
            servers: ["http://localhost:8000"]
        },
    },
    apis: ["./src/routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
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