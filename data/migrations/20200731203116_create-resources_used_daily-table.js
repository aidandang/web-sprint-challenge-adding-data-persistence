exports.up = function(knex) {
  return knex.schema
    .createTable('resource_used_daily', tbl => {
      tbl.increments();
      tbl.date('date')
        .notNullable();
      tbl.integer('taskId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('resourceId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resource_used_daily');
};