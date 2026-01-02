import { isResExist, isUserExist } from "../helpers/isExist.helper.js"
import { Restaurant } from "../models/restaurant.model.js"
import { restaurantService } from "../services/restaurant.service.js"

export const restaurantController = {
    async findAll(req, res, next) {
        try {
            const result = await restaurantService.findAll()

            res.status(200).json({
                message: "Xử lý thành công",
                data: result
            })
        } catch (error) {
            next(error)
        }
    },
    async getLikeUsers(req, res, next) {
        try {
            const { resId } = req.query;
            const resExist = await isResExist(resId);
            if (!resExist) return res.status(404).json({
                message: "Không tìm thấy nhà hàng"
            })

            const data = await restaurantService.getLikeUsers(resId);
            res.status(200).json({
                message: "Xử lý thành công",
                data: data
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                message: "Đã có lỗi trong quá trình xử lý"
            })
        }
    },
    async toggleLikeRes(req, res, next) {
        try {
            const { userId, resId } = req.body;
            const resExist = await isResExist(resId);
            if (!resExist) return res.status(404).json({
                message: "Không tìm thấy nhà hàng"
            })
            const userExist = await isUserExist(userId);
            if (!userExist) return res.status(404).json({
                message: "Không tìm thấy khách hàng"
            })

            const data = await restaurantService.toggleLikeRes(userId, resId);
            res.status(200).json({
                message: "Xử lý thành công",
                data: data
            })
        } catch (error) {
            console.error(error);
            res.status(400).json({
                message: "Đã có lỗi trong quá trình xử lý"
            })
        }
    },
    async getResRate(req, res, next) {
        try {
            const { resId } = req.query;
            const resExist = await isResExist(resId);
            if (!resExist) return res.status(404).json({
                message: "Không tìm thấy nhà hàng"
            })

            const data = await restaurantService.getResRate(resId);
            res.status(200).json({
                message: "Xử lý thành công",
                data
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                message: "Đã có lỗi trong quá trình xử lý"
            })
        }
    },
    async ratingRes(req, res, next) {
        try {
            const { userId, resId, amount } = req.body;
            // Validation
            const resExist = await isResExist(resId);
            if (!resExist) return res.status(404).json({
                message: "Không tìm thấy nhà hàng"
            })
            const userExist = await isUserExist(userId);
            if (!userExist) return res.status(404).json({
                message: "Không tìm thấy khách hàng"
            })
            if (amount < 0 || amount > 5) return res.status(500).json({
                message: "Điểm đánh giá không hợp lệ"
            })

            const data = await restaurantService.ratingRes(userId, resId, amount);
            res.status(200).json({
                message: "Xử lý thành công",
                data
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                message: "Đã có lỗi trong quá trình xử lý"
            })
        }
    }
}