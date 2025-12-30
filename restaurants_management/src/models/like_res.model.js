import { DataTypes } from "sequelize";
import sequelize from "../common//sequelize/connect.sequelize.js";

export const LikeRes = sequelize.define("LikeRes", {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    res_id: { type: DataTypes.INTEGER, primaryKey: true },
    date_like: { type: DataTypes.DATE, allowNull: true }
}, {
    tableName: "like_res",
    timestamps: false
});
