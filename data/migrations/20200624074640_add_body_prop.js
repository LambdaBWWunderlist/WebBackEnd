
exports.up = function (knex) {
    return knex.schema
        .table('items', tbl => {
            tbl.text('body')
        })
        .table('deleted_items', tbl => {
            tbl.text('body')
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('deleted_items', tbl => {
            tbl.dropColumn('body')
        })
        .table('items', tbl => {
            tbl.dropColumn('body')
        })
};
