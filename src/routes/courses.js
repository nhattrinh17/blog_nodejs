const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseControllers');

router.get('/create', courseControllers.create);
router.post('/store', courseControllers.store);
router.get('/:id/edit', courseControllers.edit);
router.post('/handle-form-action', courseControllers.handleFormAction);
router.put('/:id', courseControllers.update);
router.patch('/:id/restore', courseControllers.restore);
router.delete('/:id', courseControllers.delete);
router.delete('/:id/force', courseControllers.destroy);
router.get('/:slug', courseControllers.show);

module.exports = router;
