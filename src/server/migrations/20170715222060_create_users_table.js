/**
 * Up users table.
 *
 * @param  {object} knex
 *
 */
exports.up = function(knex) {
    console.log('generating users table');

    return knex.schema.createTable('users', table => {
        table.increments('id').primary().unsigned();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.bool('status').default(false);
        table.timestamp('created_at');
        table.timestamp('updated_at');
    }).createTable('sites', table => {
        table.increments('id').primary().unsigned();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.date('date_listed');
        table.date('date_started');
        table.integer('income');
        table.integer('visitors');
        table.integer('page_views');
        table.integer('asking_price').notNullable();
        table.string('currency_type').default('USD');
        table.string('site_title').notNullable();
        table.string('contact_email').notNullable();
        table.string('website_url').notNullable();
        table.text('website_description', 'longtext');
        table.text('category', 'longtext');
        table.timestamp('created_at');
        table.timestamp('updated_at');
    });
};


/**
 * Up sites table.
 *
 * @param  {object} knex
 *
 */

// exports.up = function(knex) {
//     console.log('generating sites table');
//     return knex.schema.createTable('sites', table => {
//         table.increments('id').primary().unsigned();
//         table.string('first_name').notNullable();
//         table.string('last_name').notNullable();
//         table.string('email').notNullable();
//         table.string('password').notNullable();
//         table.bool('status').default(false);
//         table.timestamp('created_at');
//         table.timestamp('updated_at');
//     });
// };


/**
 * Drop users table.
 *
 * @param  {object} knex
 *
 */
exports.down = function(knex) {
    console.log('dropping users table');
    return knex.schema.dropTable('users').dropTable('sites');
};


