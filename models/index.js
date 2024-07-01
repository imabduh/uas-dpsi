const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize("sql12717194", "sql12717194", "7SjrpEnau1", {
  host: "sql12.freesqldatabase.com",
  dialectModule: mysql2,
  dialect: "mysql",
});

module.exports = sequelize;
