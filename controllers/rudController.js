const Rud = require('../models/rudModel');
const catchAsync = require('../utils/catchAsync');

exports.readResourcesByProjectId = catchAsync(async (req, res, next) => {
  const project = await Rud.findResourcesOfProjectById(req.params.id);
  res.status(200).json({
    status: 'GET_SUCCESS',
    project
  });
})

exports.createRecord = catchAsync(async (req, res, next) => {
  const newRecord = await Rud.add(req.body);
  res.status(201).json({
    status: 'POST_SUCCESS',
    record: newRecord
  });
})

