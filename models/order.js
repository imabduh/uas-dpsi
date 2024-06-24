const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Products = require("./products");
const User = require("./user");

const Order = sequelize.define("Order", {
  orderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  creditCard: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "productID",
    },
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "userID",
    },
  },
});

module.exports = Order;
