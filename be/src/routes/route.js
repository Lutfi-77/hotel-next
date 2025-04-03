const express = require('express');
const authController = require('../controller/members/authController');

const router = express.Router();

// router.get("/api/member", authController.register);
router.post('/api/member', authController.register);
router.post('/api/member/login', authController.login);

module.exports = router;
