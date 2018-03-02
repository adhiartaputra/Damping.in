'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'user_partners', // name of Source model
      'event', // name of the key we're adding 
      {
        type: Sequelize.STRING,
        defaultValue: 'No Detail'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'user_partners', // name of Source model
      'event' // key we want to remove
    );
  }
};