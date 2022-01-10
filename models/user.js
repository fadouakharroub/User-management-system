'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  user.associate = function(models) {
    user.hasMany(models.departement,{
      onDelete : 'cascade',
      onUpdate : 'restrict',
      as:'departements',
      foreignKey:'user_id'
    });
  };
  return user;
};