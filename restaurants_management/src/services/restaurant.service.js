import { LikeRes, RateRes, Restaurant, User } from "../models/init.model.js";


export const restaurantService = {
    // Find All Restaurant
    async findAll() {
        const result = await Restaurant.findAll()
        return result
    },

    // get Like list
    async getLikeUsers(res_id) {
        return await Restaurant.findAll({
            attributes: ["res_id", "res_name", "image"],
            where: { res_id },
            include: [
                {
                    model: User,
                    as: "userLike",
                    attributes: {
                        exclude: ["password"]
                    },
                    through: { attributes: [] }
                }
            ]
        });
    },
    async toggleLikeRes(user_id, res_id) {
        const likeExist = await LikeRes.findOne({
            where: { user_id, res_id }
        });
        // Nếu chưa like → Like
        if (!likeExist) {
            const newLike = await LikeRes.create({
                user_id,
                res_id,
                date_like: new Date()
            })
            return {
                action: "Like rồi",
                data: newLike
            }
        } else {
            // Nếu đã like → Unlike
            await LikeRes.destroy({
                where: { user_id, res_id }
            });
            return {
                action: "Đã Unlike"
            }
        }
    },
    async getResRate(res_id) {
        const result = await Restaurant.findAll({
            attributes: ["res_id", "res_name", "image"],
            where: { res_id },
            include: [
                {
                    model: User,
                    as: "userRate",
                    attributes: {
                        exclude: ["password"]
                    },
                    through: {
                        attributes: ["user_id", "amount", "date_rate"]
                    }
                }
            ]
        })
        return result
    },
    async ratingRes(user_id, res_id, amount) {
        const rateExist = await RateRes.findOne({
            where: { user_id, res_id }
        })
        // Nếu chưa đánh giá → Đánh giá
        if (!rateExist) {
            const newRate = await RateRes.create({
                user_id,
                res_id,
                amount,
                date_rate: new Date()
            });
            return {
                content: "Cảm ơn bạn đã đánh giá"
            }
        } else {
            return {
                content: "Bạn đã đánh giá nhà hàng này rồi"
            }
        }
    }
} 
