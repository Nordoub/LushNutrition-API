const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    title: { type: DataTypes.STRING, allowNull: false },
    calorieën: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()"),
    },
  };

  const options = {
    defaultScope: {},
    scopes: {},
  };

  return sequelize.define("Meal", attributes, options);
}
