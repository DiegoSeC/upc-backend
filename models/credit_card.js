'use strict';

module.exports = (sequelize, DataTypes) => {
  let CreditCard = sequelize.define('CreditCard', {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    ccv: DataTypes.STRING,
    type: DataTypes.STRING,
    exp: DataTypes.STRING
  });

  CreditCard.associate = (models) => {
    models.CreditCard.belongsTo(models.User);
  };

  return CreditCard;
};
