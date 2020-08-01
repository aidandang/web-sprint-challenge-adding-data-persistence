const Resource = require('../models/resourceModel');
const catchAsync = require('../utils/catchAsync');

exports.readResources = catchAsync(async (req, res, next) => {
  const resources = await Resource.find();
  res.status(200).json({
    status: 'GET_SUCCESS',
    resources
  });
})

exports.createResource = catchAsync(async (req, res, next) => {
  const newResource = await Resource.add(req.body);
  res.status(201).json({
    status: 'POST_SUCCESS',
    resource: newResource
  });
})

exports.readResourceById = catchAsync(async (req, res, next) => {
  const resource = await Resource.findById(req.params.id);
  res.status(200).json({
    status: 'GET_SUCCESS',
    resource
  });
})



