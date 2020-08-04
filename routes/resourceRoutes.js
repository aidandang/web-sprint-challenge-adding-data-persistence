const express = require('express');
const resourceController = require('../controllers/resourceController');
const router = express.Router();

router
  .route('/')
  .get(resourceController.readResources)
  .post(resourceController.createResource);

router
  .route('/:id')
  .get(resourceController.readResourceById);

module.exports = router;