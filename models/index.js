const Sequelize = require('sequelize');
const users  = require ('./user');
const departements = require  ('./departement');
const sequelize = new Sequelize('gestion', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});


const models = {};
models.users = users(sequelize);
models.departements = departements(sequelize);

models.users.belongsTo(models.departements, {
    foreignKey: { name: 'departementId'}, onDelete: 'cascade', hooks: true
  });
sequelize.sync({ force: false});
module.exports = {models};