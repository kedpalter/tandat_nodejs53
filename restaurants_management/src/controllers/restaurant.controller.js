import { restaurantService } from "../services/restaurant.service.js"

export const restaurantController = {
    async findAll(req, res, next) {
        try {
            const result = await restaurantService.findAll()

            res.status(200).json({
                message: "Get Restaurant list Success",
                data: result
            })
        } catch (error) {
            next(error)
        }
    },
    async getLikeUsers(req, res, next) {
        try {
            const { resId } = req.query;
            const data = await restaurantService.getLikeUsers(resId);
            res.status(200).json({
                message: "Danh sách User like nhà hàng",
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