import { isFoodExist, isUserExist } from "../helpers/isExist.helper.js";
import { userService } from "../services/user.service.js";


export const userController = {
    async getFavoriteRes(req, res, next) {
        try {
            const { userId } = req.query;
            const userExist = await isUserExist(userId);
            if (!userExist) return res.status(404).json({
                message: "Không tìm thấy khách hàng"
            })

            const data = await userService.getFavoriteRes(userId);
            res.status(200).json({
                message: "Danh sách nhà hàng đã like",
                data: data
            });
        } catch (error) {
            console.error(error);
            res.status(400).json({
                message: "Đã có lỗi trong quá trình xử lý"
            })
        }
    },
    async getRatedRes(req, res, next) {
        try {
            const { userId } = req.query;
            const userExist = await isUserExist(userId);
            if (!userExist) return res.status(404).json({
                message: "Không tìm thấy khách hàng"
            })

            const data = await userService.getRatedRes(userId)
            res.status(200).json({
                message: "Xử lý thành công",
                data
            })
        } catch (error) {
            console.error(error);
            res.status(400).json({
                message: "Đã có lỗi trong quá trình xử lý"
            })
        }
    },
    async handleOrder(req, res, next) {
        try {
            const { userId, foodId, amount, code, subFoodId } = req.body;
            // Validation
            const userExist = await isUserExist(userId);
            if (!userExist) return res.status(404).json({
                message: "Không tìm thấy khách hàng"
            })
            const foodExist = await isFoodExist(foodId);
            if (!foodExist) return res.status(404).json({
                message: "Không tìm thấy món ăn"
            })
            if (amount <= 0) return res.status(500).json({
                message: "Số lượng không hợp lệ"
            })
            
            const data = await userService.handleOrder(userId, foodId, amount, code, subFoodId)
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