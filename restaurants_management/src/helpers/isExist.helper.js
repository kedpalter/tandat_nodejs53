import { Food, Restaurant, User } from "../models/init.model.js";


export const isResExist = async (res_id) => {
    return await Restaurant.findOne({ where: { res_id } }) ? true : false
}

export const isUserExist = async (user_id) => {
    return await User.findOne({ where: { user_id } }) ? true : false
}

export const isFoodExist = async (food_id) => {
    return await Food.findOne({ where: { food_id } }) ? true : false
}