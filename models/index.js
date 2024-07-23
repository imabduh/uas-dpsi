const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize("freedb_uas_dpsi", "freedb_mabduh", "JyuSPU%27R$QsKY", {
  host: "sql.freedb.tech",
  dialectModule: mysql2,
  dialect: "mysql",
});

module.exports = sequelize;
