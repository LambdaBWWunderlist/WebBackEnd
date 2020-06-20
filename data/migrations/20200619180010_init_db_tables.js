
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            //Primary Key
            tbl.increments()

            tbl.string('username', 128).notNullable().unique().index()
            tbl.string('password', 256).notNullable()
            tbl.string('email', 128).notNullable().unique()
            tbl.timestamp('created_at', { useTz: false }).defaultsTo(knex.fn.now())
            tbl.timestamp('updated_at', { useTz: false }).defaultsTo(knex.fn.now())
        })
        .createTable('items', tbl => {
            tbl.increments()

            tbl.string('name', 128).notNullable().index()
            tbl.boolean('completed', 256).notNullable().defaultsTo(false)
            tbl.string('recurring').defaultsTo(null)
            tbl.timestamp('created_at', { useTz: false }).defaultsTo(knex.fn.now())
            tbl.timestamp('updated_at', { useTz: false }).defaultsTo(knex.fn.now())

            //Foreign Key user_id => users.id
            tbl.integer('user_id')
                .notNullable()
                .unsigned()
                .references('users.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('items')
        .dropTableIfExists('users')
};
