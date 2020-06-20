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
    const [id] = await db('users').insert(user, 'id')

    return findById(id)
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

function update(id) {

}

async function remove(id) {
    const user = await findById(id)
    const count = await db('users').where('id', id).del()

    return count ? user : count
}