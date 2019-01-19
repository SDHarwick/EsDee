
exports.up = function(knex, Promise) {
    return knex.schema.table('sites', function(t) {
        t.boolean('approved_status').defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('sites', function(t) {
        t.dropColumn('approved_status');
    });
};
