const express = require('express');
const projectRouter = require('./routes/projectRoutes.js');
const taskRouter = require('./routes/taskRoutes.js');
const resourceRouter = require('./routes/resourceRoutes.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;