const db = require('../data/db-conn')

module.exports = {
    insert,
    find,
    findById,
    update,
    remove
}

async function insert(item) {
    try {
        const user = await findUser(item.user_id)

        if (user) {
            const [id] = await db('items').insert(item, 'id')
            return findById(id)
        }
        else {
            return false
        }
    }
    catch (error) {
        throw error
    }
}

async function find(user_id) {
    try {
        const user = await findUser(user_id)

        if (user) {
            const items = await db('items as i')
                .where('i.user_id', user_id)
                .join('users as u', 'i.user_id', 'u.id')
                .select('i.id', 'i.name', 'i.completed', 'i.recurring', 'i.created_at', 'i.updated_at', 'u.username')
                .orderBy('i.id')

            return items.map(i => i.completed ? { ...i, completed: true } : { ...i, completed: false })
        }
        else {
            return false
        }
    }
    catch (error) {
        throw error
    }

}

async function findById(id) {
    const item = await db('items as i')
        .where('i.id', id)
        .join('users as u', 'i.user_id', 'u.id')
        .select('i.id', 'i.name', 'i.completed', 'i.recurring', 'i.created_at', 'i.updated_at', 'u.username')
        .first()

    item.completed ? item.completed = true : item.completed = false

    return item
}

function findUser(user_id) {
    return db('users').where('id', user_id).first()
}

async function update(item, id) {
    const count = await db('items').where('id', id).update(item)
    return count ? findById(id) : count
}

async function remove(id) {
    const item = await db('items as i')
        .where('i.id', id)
        .join('users as u', 'i.user_id', 'u.id')
        .select('i.name', 'i.completed', 'i.recurring', 'i.created_at', 'i.user_id')
        .first()

    const [deletedId] = await db('deleted_items').insert(item, 'id')
    const deletedItem = await db('deleted_items').where('id', deletedId).first()
    deletedId.completed ? deletedId.completed = true : deletedId.completed = false

    const count = await db('items').where('id', id).del()

    return count ? deletedItem : count
}