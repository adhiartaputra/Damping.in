'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'user_partners', // name of Source model
      'status', // name of the key we're adding 
      {
        type: Sequelize.BOOLEAN,
        defaultValue: null,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'user_partner', // name of Source model
      'status' // key we want to remove
    );
  }
};