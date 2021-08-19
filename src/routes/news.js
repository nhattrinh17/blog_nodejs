const express = require('express')
const router = express.Router()

const newControllers = require('../app/controllers/NewsControllers')

// newsContronllers.index

router.use('/', newControllers.index)

module.exports = router
