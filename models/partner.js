'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Partner = sequelize.define('Partner', {
    first_name  : DataTypes.STRING,
    last_name   : DataTypes.STRING,
    gender      : DataTypes.STRING,
    age         : DataTypes.INTEGER,
    email       : DataTypes.STRING,
    phone       : DataTypes.STRING,
    height      : DataTypes.INTEGER,
    weight      : DataTypes.INTEGER,
    rate        : DataTypes.INTEGER,
    password    : DataTypes.STRING,
    role        : DataTypes.STRING
  });
  Partner.associate = function(models) {
    Partner.belongsToMany(models.Users, {
      through    : 'user_partners',
      foreignKey : 'partnerId'
    })
  };
  Partner.beforeCreate(dataPartner => {
    const saltRounds = 10;
    const myPlaintextPassword = dataPartner.password;
    return bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
      // Store hash in your password DB.
      dataPartner.password = hash
    });
  })
  return Partner;
};
