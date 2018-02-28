'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Partners', [{
        first_name : 'Iken',
        last_name  : 'Nurjannah',
        gender     : 'female',
        age        : 28,
        email      : 'iken_nur@gmail.com',
        phone      : '082123456321',
        height     : 165,
        weight     : 50,
        rate       : 300000
      },{
        first_name : 'Rhoma',
        last_name  : 'Birama',
        gender     : 'male',
        age        : 30,
        email      : 'rajadangdut@gmail.com',
        phone      : '082123878321',
        height     : 178,
        weight     : 82,
        rate       : 250000
      }])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Partners', null, {});
  }
};
