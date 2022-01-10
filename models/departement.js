'use strict';
module.exports = (sequelize, DataTypes) => {
  const departement = sequelize.define('departement', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return departement;
};