import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const Order = sequelize.define("Order", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    food_id: { type: DataTypes.INTEGER, primaryKey: true },
    amount: { type: DataTypes.INTEGER, allowNull: true },
    code: { type: DataTypes.STRING(255), allowNull: true },
    arr_sub_id: { type: DataTypes.STRING(255), allowNull: true }
}, {
    tableName: "order",
    timestamps: false
});
