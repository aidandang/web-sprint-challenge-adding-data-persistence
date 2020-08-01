const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router
  .route('/')
  .get(taskController.readTasks)
  .post(taskController.createTask);

router
  .route('/:id')
  .get(taskController.readTaskById)
  .delete(taskController.deleteTaskById)

module.exports = router;