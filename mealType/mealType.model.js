const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    type: { type: DataTypes.STRING, allowNull: false },
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
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
    scopes: {},
  };

  return sequelize.define("MealType", attributes, options);
}
