const express = require('express');
const router = express.Router();
const user = require('./userController');

// por default todas tienen /users
router.get('/', user.getUsers);

router.post('/', (req, res ) => {
    const body = req.body;
    console.log(body);
    res.status(201).json(body);
})

router.get('/:id', (req, res) =>{
  res.json({user: "test"})
})

module.exports = router;