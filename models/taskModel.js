const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('tasks')
    .join('projects', 'tasks.projectId', '=', 'projects.id')
    .select('tasks.id', 'tasks.taskDesc', 'tasks.notes', 'tasks.taskStatus', 'projects.projectName', 'projects.projectDesc');
}

function findById(id) {
  return db('tasks').where({ id }).first();
}

function add(task) {
  return db('tasks').insert(task);
}

function remove(id) {
  return db('tasks').where({'id': id}).del()
}