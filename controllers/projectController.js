const Project = require('../models/projectModel');
const catchAsync = require('../utils/catchAsync');

exports.readProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({
    status: 'GET_SUCCESS',
    projects
  });
})

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.add(req.body);
  res.status(201).json({
    status: 'POST_SUCCESS',
    project: newProject
  });
})

exports.readProjectById = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  res.status(200).json({
    status: 'GET_SUCCESS',
    project
  });
})



