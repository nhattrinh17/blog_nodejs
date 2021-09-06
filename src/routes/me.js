const express = require('express');
const router = express.Router();

const meControllers = require('../app/controllers/MeControllers');

router.get('/stored/courses', meControllers.courses);
router.get('/trash/courses', meControllers.showDeleted);
router.get('/stored/blog', meControllers.blog);

module.exports = router;
