const db = require('../data/db-conn')

module.exports = {
    insert,
    find,
    findBy,
    findById,
    update,
    remove
}

async function insert(user) {
    try {
        const [id] = await db('users').insert(user, 'id')

        return findById(id)
    }
    catch (error) {
        throw error
    }

}

function find() {
    return db('users').orderBy('id')
}

function findBy(filter) {
    return db('users').where(filter).first()
}

function findById(id) {
    return db('users').where({ id }).first()
}

async function update(user, id) {
    try {
        const count = await db('users').where('id', id).update(user)
        return count ? findById(id) : count
    }
    catch (error) {
        throw error
    }

}

async function remove(id) {
    try {
        const user = await findById(id)
        const count = await db('users').where('id', id).del()

        return count ? user : count
    }
    catch (error) {
        throw error
    }

}