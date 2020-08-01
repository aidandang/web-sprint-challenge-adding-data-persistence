exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('projectName', 128)
        .notNullable();
      tbl.text('projectDesc');
      tbl.boolean('projectStatus')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.text('resourceName')
        .unique()
        .notNullable();
      tbl.text('resourceDesc');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('taskDesc')
        .notNullable();
      tbl.text('notes');
      tbl.boolean('taskStatus')
        .notNullable()
        .defaultTo(false);
      tbl.integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knew.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};