'use strict';

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
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
          password: 'demo',
          name: 'Demo Demonosky',
          email: 'demo@demo.com',
          phoneNumber: '993845576',
          address: 'Av. Demo 123 Demo Demo',
          picture: 'https://placeimg.com/150/150/people'
        });
      }
    });
  });

  return User;
};