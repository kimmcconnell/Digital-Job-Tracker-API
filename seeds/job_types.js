
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_types').del()
  .then(() => {
    return knex('jobs').del()
  })
  .then(() => {
    return knex('lanes').del()
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
      {id: 1, title: 'For Jim', description: 'Special Project, see Jim', due_date: '2019-05-25 13:23:45', lane_id: 1, job_type: 2},
      {id: 2, title: 'Blue', description: 'Titanium', due_date: '2019-05-25 13:23:45', lane_id: 1, job_type: 2},
      {id: 3, title: 'Green', description: 'Titanium', due_date: '2019-05-25 13:23:45', lane_id: 1, job_type: 2},
      {id: 4, title: 'Blue', description: 'Steel', due_date: '2019-05-25 13:23:45', lane_id: 2, job_type: 1},
      {id: 5, title: 'Green', description: 'Steel', due_date: '2019-05-25 13:23:45', lane_id: 2, job_type: 1}
    ])
    .then(function () {
      return knex('lanes').insert([
        {id: 1, name: 'To Be Started', details: null},
        {id: 2, name: 'Phase 1', details: null},
        {id: 3, name: 'Phase 2', details: null},
        {id: 4, name: 'Phase 3', details: null}
      ]);
    })
  })
};
