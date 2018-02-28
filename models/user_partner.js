'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_partner = sequelize.define('user_partner', {
    partnerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  user_partner.associate = function(models) {
    // user_partner.belongsTo(models.User, {
    //   foreignKey: 'userId'
    // })
    user_partner.belongsTo(models.Partner, {
      foreignKey: 'partnerId'
    })
  };
  return user_partner;
};
