
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .raw('TRUNCATE users RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'ironman',
          password: '$2a$08$v93IuqPZJcI8WP8FWWFT3eCDOy1pLr3elWdxg1KsNZXEBWpvt3Cea',
          email: 'tony.stark@starkindustries.net'
        },
        {
          username: 'the_hitman',
          password: '$2a$08$R099XP4fX.c9TtoiFnsYt.SiFVYArK7m5qjzwdykVCfzncgrNyg6G',
          email: 'bret.hart@wrestling-legends.com'
        },
        {
          username: 'dieHard',
          password: '$2a$08$3WUNnKV3BxjX8G90Pssgi.hDsd7OX67kIVqJj6KBNkAtcv61QUOdW',
          email: 'john.mcclane@nypd.gov'
        },
        {
          username: 'demperor',
          password: '$2a$08$95J/NdCvvRs7E87p4kCQLuhd5kI4A.T0eE.VoSWHX1XoyQLC7M1aC',
          email: 'liam@deploymentzone.tv'
        },
        {
          username: 'starlord',
          password: '$2a$08$fyN8q.4enVC6FfAjIMlbs.UaNMos7HAlIu7zfCR7C8NGe2AljeLaC',
          email: 'pquill@guardian.net'
        },
      ]);
    });
};
