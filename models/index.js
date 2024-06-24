const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dpsi", "admin", "admin", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
