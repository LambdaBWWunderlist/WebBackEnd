
exports.up = function (knex) {
    return knex.schema
        .table('items', tbl => {
            tbl.timestamp('due_date', { useTZ: false })
        })
        .table('deleted_items', tbl => {
            tbl.timestamp('due_date', { useTZ: false })
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('deleted_items', tbl => {
            tbl.dropColumn('due_date')
        })
        .table('items', tbl => {
            tbl.dropColumn('due_date')
        })
};
