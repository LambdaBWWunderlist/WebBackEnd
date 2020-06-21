const db = require('../data/db-conn')

module.exports = {
    find,

}

function find(user_id) {
    return db('deleted_items').where('user_id', user_id)
}