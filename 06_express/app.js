const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const morgan = require('morgan');
require('dotenv').config()

app.use(morgan('tiny'))
const routes = require('./routes');


const port = process.env.NODE_PORT || 4000 ;

app.use(bodyParser.json()) // for parsing application/json




routes(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})