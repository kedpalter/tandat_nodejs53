import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const SubFood = sequelize.define("SubFood", {
    sub_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sub_name: { type: DataTypes.STRING(255), allowNull: true },
    sub_price: { type: DataTypes.FLOAT, allowNull: true },
    food_id: { type: DataTypes.INTEGER, allowNull: true }
}, {
    tableName: "sub_food",
    timestamps: false
});
