const db = require('../data/dbConfig');

module.exports = {
  findResourcesOfProjectById
}

function findResourcesOfProjectById(id) {
  return db('resource_used_daily')
    .join('projects', 'resource_used_daily.projectId', '=', 'projects.id')
    .join('resouces', 'resource_used_daily.resourceId', '=', 'resources.id')
    .where({'resource_used_daily.projectId': id})
    .select('projects.projectName', 'resources.resourceName', 'resources.resourceDesc')
}