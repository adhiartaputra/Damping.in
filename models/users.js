'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });
  Users.associate = models => {
    Users.belongsToMany(models.Partner, {
      through:'user_partners',
      foreignKey: 'userId',
    })
  }
  Users.prototype.full_name = function(){
    return `${this.first_name} ${this.last_name}`
  }
  Users.beforeCreate(dataUser => {
    const saltRounds = 10;
    const myPlaintextPassword = dataUser.password;
    return bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
      // Store hash in your password DB.
      dataUser.password = hash
    });
  })
  return Users;
};
