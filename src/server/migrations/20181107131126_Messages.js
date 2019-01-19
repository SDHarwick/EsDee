
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary().unsigned();
    table.integer('sender_id').notNullable();
    table.integer('recipient_id').notNullable();
    table.string('subject');
    table.text('body', 'longtext');
    table.bool('viewed_status').default(false);
    table.timestamp('created_at');
    table.timestamp('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
