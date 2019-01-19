
exports.up = function(knex, Promise) {
    return knex.schema.table('messages', function(t) {
        t.integer('site_id').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('messages', function(t) {
        t.dropColumn('site_id');
    });
};
