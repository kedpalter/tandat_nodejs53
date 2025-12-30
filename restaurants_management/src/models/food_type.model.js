import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const FoodType = sequelize.define("FoodType", {
    type_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type_name: { type: DataTypes.STRING(255), allowNull: true }
}, {
    tableName: "food_type",
    timestamps: false
});
