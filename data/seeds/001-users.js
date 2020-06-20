
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'ironman',
          password: 'iam!ronman',
          email: 'tony.stark@starkindustries.net'
        },
        {
          username: 'the_hitman',
          password: 'sharpshooter',
          email: 'bret.hart@wrestling-legends.com'
        },
        {
          username: 'dieHard',
          password: 'yippeekiyay',
          email: 'john.mcclane@nypd.gov'
        },
        {
          username: 'demperor',
          password: 'warhammer40k',
          email: 'liam@deploymentzone.tv'
        },
        {
          username: 'starlord',
          password: 'gamora',
          email: 'pquill@guardian.net'
        },
      ]);
    });
};
