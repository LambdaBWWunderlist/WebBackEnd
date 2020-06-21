
exports.up = function (knex) {
    return knex.schema.createTable('deleted_items', tbl => {
        //Primary Key  
        tbl.increments()

        tbl.string('name', 128).notNullable().index()
        tbl.boolean('completed', 256).notNullable().defaultsTo(false)
        tbl.string('recurring').defaultsTo(null)
        tbl.timestamp('created_at', { useTz: false })
        tbl.timestamp('deleted_at', { useTz: false }).defaultsTo(knex.fn.now())

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
    return knex.schema.dropTableIfExists('deleted_items')
};
