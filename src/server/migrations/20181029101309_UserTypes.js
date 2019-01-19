
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('account_type').default('user');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('account_type');
    });
};
