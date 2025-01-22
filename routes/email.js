const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/email.ctrl.js');

router.post('/data', sendEmail);

module.exports = router;