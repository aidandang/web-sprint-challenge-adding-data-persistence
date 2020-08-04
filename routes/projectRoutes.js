const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router
  .route('/')
  .get(projectController.readProjects)
  .post(projectController.createProject);

router
  .route('/:id')
  .get(projectController.readProjectById);

module.exports = router;