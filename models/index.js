const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sql12717194", "sql12717194", "7SjrpEnau1", {
  host: "sql12.freesqldatabase.com",
  dialect: "mysql",
});

module.exports = sequelize;
