const express = require("express");
const { index, almacenarToken } = require('../controllers/loginController')

const router = express.Router();

router.get('/', index)

router.post('/almacenado', almacenarToken)


module.exports = router