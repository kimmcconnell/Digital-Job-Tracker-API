
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_types').del()
  .then(() => {
    return knex('jobs').del()
  })
  .then(function () {
    return knex('job_types').insert([
      {id: 1, title: '5S Project', description: 'Engage in 5s projects'},
      {id: 2, title: 'Experiment', description: 'Experiment on things'},
      {id: 3, title: 'WaterTest', description: 'Check pH and conductivity of water regularly'}
    ]);
  })
  .then(function () {
    return knex('jobs').insert([
      {id: 1, title: 'For Jim', description: 'Special Project, see Jim'},
      {id: 2, title: 'Blue', description: 'Titanium'},
      {id: 3, title: 'Green', description: 'Titanium'}
    ]);
  })
};
