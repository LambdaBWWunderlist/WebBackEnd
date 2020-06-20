
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          name: 'Assemble the avengers',
          user_id: 1
        },
        {
          name: 'Solve time travel',
          user_id: 1
        },
        {
          name: 'Get the Infinity Stones',
          user_id: 1
        },
        {
          name: '?????',
          user_id: 1
        },
        {
          name: 'Profit',
          user_id: 1
        }
      ]);
    });
};
