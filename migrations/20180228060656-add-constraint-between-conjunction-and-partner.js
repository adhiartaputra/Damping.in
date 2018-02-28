'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint('user_partners', ['partnerId'], {
     type: 'foreign key',
     name: 'Conjunction_Partner',
     references: { //Required field
       table: 'Partners',
       field: 'id'
     },
     onDelete: 'cascade',
     onUpdate: 'cascade'
     });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
