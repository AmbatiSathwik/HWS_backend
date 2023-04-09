const db = require("../../../db");
const { DataTypes } = require("sequelize");
  
const notification = db.define(
    "notification",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

    },
    {
      timestamps:true,
    },
    {
      tableName: "notification",
    }
);
  
module.exports= {
  notification
} 