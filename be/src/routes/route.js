const express = require('express');
const registerController = require('../controller/members/registerController');

const router = express.Router();

router.get('/api/test', registerController.register);

module.exports = router;
