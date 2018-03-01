'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Partners','password',Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Partners','password',{});
  }
};
