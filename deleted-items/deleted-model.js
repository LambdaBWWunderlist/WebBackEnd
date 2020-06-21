const db = require('../data/db-conn')

module.exports = {
    undelete,
    find,
    remove
}

async function undelete(id) {
    const item = await db('deleted_items')
        .where('id', id)
        .select('name', 'completed', 'recurring', 'created_at', 'user_id')

    const [recoverId] = await db('items').insert(item, 'id')

    return db('items').where('id', recoverId)
}

function find(user_id) {
    return db('deleted_items').where('user_id', user_id)
}

async function remove(id) {
    const item = await db('deleted_items').where('id', id)
    const count = await db('deleted_items').where('id', id).del()

    return count ? item : count
}