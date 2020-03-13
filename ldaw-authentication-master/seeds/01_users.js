exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Galateros', email: 'b@a.com', password: '$10$ozCKWBTW6/hz5sSrEeDQAuGf8oCgSLP4rfTv4MFy0v7Yg2pbbssAG',rol: 'admin' },
        { name: 'Galateros', email: 'a@a.com', password: '$10$ozCKWBTW6/hz5sSrEeDQAuGf8oCgSLP4rfTv4MFy0v7Yg2pbbssAG',rol: 'admin' }
        
             ]);
    });
};
