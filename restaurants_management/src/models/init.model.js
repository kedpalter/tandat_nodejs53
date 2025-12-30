import { Sequelize } from "sequelize";
import { Food } from "./food.model.js";
import { SubFood } from "./sub_food.model.js";
import { FoodType } from "./food_type.model.js";
import { User } from "./user.model.js";
import { Order } from "./order.model.js";
import { RateRes } from "./rate_res.model.js";
import { LikeRes } from "./like_res.model.js";
import { Restaurant } from "./restaurant.model.js";

// FoodType 1-n Food
FoodType.hasMany(Food, { foreignKey: "type_id" });
Food.belongsTo(FoodType, { foreignKey: "type_id" });

// Food 1-n SubFood
Food.hasMany(SubFood, { foreignKey: "food_id" });
SubFood.belongsTo(Food, { foreignKey: "food_id" });

// User - Order - Food (n-n qua Order)
User.belongsToMany(Food, { through: Order, foreignKey: "user_id" });
Food.belongsToMany(User, { through: Order, foreignKey: "food_id" });

// User - RateRes - Restaurant (n-n)
User.belongsToMany(Restaurant, { through: RateRes, foreignKey: "user_id", as: "ratedRes" });
Restaurant.belongsToMany(User, { through: RateRes, foreignKey: "res_id", as: "userRate" });

// User - LikeRes - Restaurant (n-n)
User.belongsToMany(Restaurant, { through: LikeRes, foreignKey: "user_id", as: "likedRes" });
Restaurant.belongsToMany(User, { through: LikeRes, foreignKey: "res_id", as: "userLike" });

export { Sequelize, Food, SubFood, FoodType, User, Order, RateRes, LikeRes, Restaurant };
