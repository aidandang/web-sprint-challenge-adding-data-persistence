const Task = require('../models/taskModel');
const catchAsync = require('../utils/catchAsync');

exports.readTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({
    status: 'GET_SUCCESS',
    tasks
  });
})

exports.createTask = catchAsync(async (req, res, next) => {
  const newTask = await Task.add(req.body);
  res.status(201).json({
    status: 'POST_SUCCESS',
    task: newTask
  });
})

exports.readTaskById = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json({
    status: 'GET_SUCCESS',
    task
  });
})

exports.deleteTaskById = catchAsync(async (req, res, next) => {
  const task = await Task.remove(req.params.id);
  res.status(204).json({
    status: 'DELETE_SUCCESS',
    task
  });
})



