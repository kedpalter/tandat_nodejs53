import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const Restaurant = sequelize.define("Restaurant", {
    res_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    res_name: { type: DataTypes.STRING(255), allowNull: true },
    image: { type: DataTypes.STRING(255), allowNull: true },
    desc: { type: DataTypes.STRING(255), allowNull: true }
}, {
    tableName: "restaurant",
    timestamps: false
});
