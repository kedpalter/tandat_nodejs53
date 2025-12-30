import { Order, Restaurant, User } from "../models/init.model.js";

export const userService = {
    async getFavoriteRes(user_id) {
        const result = await User.findAll({
            attributes: {
                exclude: ["password"]
            },
            where: { user_id },
            include: [
                {
                    model: Restaurant,
                    as: "likedRes",
                    through: { attributes: [] }
                }
            ]
        })
        return result
    },
    async getRatedRes(user_id) {
        const result = await User.findAll({
            attributes: {
                exclude: ["password"]
            },
            where: { user_id },
            include: [
                {
                    model: Restaurant,
                    as: "ratedRes",
                    through: {
                        attributes: ["res_id", "amount", "date_rate"]
                    }
                }
            ]
        })
        return result
    },
    async handleOrder(user_id, food_id, amount, code, sub_food_id) {
        const newOrder = await Order.create({
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id: sub_food_id
        })
        return "Đặt món thành công"
    }
}