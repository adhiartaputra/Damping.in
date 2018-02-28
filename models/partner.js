'use strict';
module.exports = (sequelize, DataTypes) => {
  var Partner = sequelize.define('Partner', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  });
  Partner.associate = function(models) {
    // Partner.belongsToMany(models.User, {
    //   through    : 'user_partners',
    //   foreignKey : 'partnerId'
    // })
  };
  return Partner;
};
