exports.up = async knex => {
  await knex.schema.createTable('todoList', tbl => {
    tbl.increments();
    tbl.text('message', 30).notNullable();
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('todoList');
};
