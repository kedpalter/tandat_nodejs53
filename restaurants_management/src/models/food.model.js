import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const Food = sequelize.define("Food", {
    food_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    food_name: { type: DataTypes.STRING(255), allowNull: true },
    image: { type: DataTypes.STRING(255), allowNull: true },
    price: { type: DataTypes.FLOAT, allowNull: true },
    desc: { type: DataTypes.STRING(255), allowNull: true },
    type_id: { type: DataTypes.INTEGER, allowNull: true }
}, {
    tableName: "food",
    timestamps: false
});
