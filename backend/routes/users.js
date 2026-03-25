var express = require('express');
var router = express.Router();

const userController = require('../controllers/users');

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.get('/:email', userController.getUserByEmail)

module.exports = router;
