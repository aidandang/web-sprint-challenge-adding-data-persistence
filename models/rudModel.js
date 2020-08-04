const db = require('../data/dbConfig');

module.exports = {
  add,
  findResourcesOfProjectById
}

function add(record) {
  return db('resource_used_daily').insert(record);
}

function findResourcesOfProjectById(id) {
  return db('resource_used_daily')
    .join('projects', 'resource_used_daily.projectId', '=', 'projects.id')
    .join('resources', 'resource_used_daily.resourceId', '=', 'resources.id')
    .where({'resource_used_daily.projectId': id})
    .select('projects.projectName', 'resources.resourceName', 'resources.resourceDesc')
}