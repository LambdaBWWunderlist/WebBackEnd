
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items').insert([
    {
      name: 'Assemble the avengers',
      due_date: '2020-06-30 12:00:00',
      user_id: 1
    },
    {
      name: 'Become Heavy weight Champ',
      due_date: '2020-06-30 12:00:00',
      user_id: 2
    },
    {
      name: 'Solve time travel',
      due_date: '2020-06-30 12:00:00',
      user_id: 1
    },
    {
      name: 'Win Royale Rumble',
      due_date: '2020-06-30 12:00:00',
      user_id: 2
    },
    {
      name: 'Get the Infinity Stones',
      due_date: '2020-06-30 12:00:00',
      user_id: 1
    },
    {
      name: '?????',
      due_date: '2020-06-30 12:00:00',
      user_id: 1
    },
    {
      name: 'Profit',
      due_date: '2020-06-30 12:00:00',
      user_id: 1
    }
  ]);
};
