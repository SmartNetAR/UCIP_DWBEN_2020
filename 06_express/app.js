const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const user = require('./userController');

const port = 5000

app.use(bodyParser.json()) // for parsing application/json

// console.log(user.getUsers);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', user.getUsers);

app.post('/users', (req, res ) => {
    const body = req.body;
    console.log(body);
    res.status(201).json(body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})