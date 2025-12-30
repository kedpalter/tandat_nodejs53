import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const RateRes = sequelize.define("RateRes", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    res_id: { type: DataTypes.INTEGER, primaryKey: true },
    amount: { type: DataTypes.INTEGER, allowNull: true },
    date_rate: { type: DataTypes.DATE, allowNull: true }
}, {
    tableName: "rate_res",
    timestamps: false
});
