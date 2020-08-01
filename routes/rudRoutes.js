const express = require('express');
const rudController = require('../controllers/rudController');
const router = express.Router();

router
  .route('/')
  .post(rudController.createRecord);

router
  .route('/:id')
  .get(rudController.readResourcesByProjectId);

module.exports = router;