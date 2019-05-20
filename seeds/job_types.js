
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_types').insert([
        {id: 1, title: '5S Project', desciption: 'Engage in 5s projects'},
        {id: 2, title: 'Experiment', desciption: 'Experiment on things'},
        {id: 3, title: 'WaterTest', desciption: 'Check pH and conductivity of water regularly'}
      ]);
    });
};