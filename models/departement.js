
module.exports = (sequelize, DataTypes) => {
  const departement = sequelize.define('departement', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
 
  return departement;
};