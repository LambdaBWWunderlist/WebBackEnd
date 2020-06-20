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

function findById(id) {
    return db('items').where('id', id).first()
}

function findUser(user_id) {
    return db('users').where('id', user_id).first()
}

function update(id) {

}

async function remove(id) {
    const item = await findById(id)
    const count = await db('items').where('id', id).del()

    return count ? item : count
}