'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  });
  Users.associate = models => {
    Users.belongsToMany(models.Partner, {
      through:'user_partners',
      foreignKey: 'userId',
    })
  }
  return Users;
};