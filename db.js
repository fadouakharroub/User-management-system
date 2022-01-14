const Sequelize = require('sequelize');
const db = new Sequelize('gestion', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});

module.export = db;
