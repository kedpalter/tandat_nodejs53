import express from 'express'
import { restaurantController } from '../controllers/restaurant.controller.js';

const restaurantRouter = express.Router()

// GET danh sách toàn bộ nhà hàng
restaurantRouter.get("/findAll", restaurantController.findAll)

// GET danh sách User like nhà hàng
restaurantRouter.get("/likedUsers", restaurantController.getLikeUsers);

// POST thao tác Like/Unlike nhà hàng
restaurantRouter.post("/toggleLike", restaurantController.toggleLikeRes);

// GET danh sách đánh giá nhà hàng
restaurantRouter.get("/resRate", restaurantController.getResRate);

// POST thao tác đánh giá nhà hàng
restaurantRouter.post("/ratingRes", restaurantController.ratingRes);

export default restaurantRouter;
