'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.sync().then(() => {
    return User.findOne({
      where: {
        username: 'demo'
      }
    }).then(user => {
      if(!user) {
        User.create({
          username: 'demo',
          password: 'demo'
        });
      }
    });
  });

  return User;
};