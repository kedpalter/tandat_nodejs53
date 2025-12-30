import express from 'express'
import { userController } from '../controllers/user.controller.js';

const userRouter = express.Router();

// GET Favorite Restaurants
userRouter.get("/favoriteRes", userController.getFavoriteRes);

// GET Rated Restaurants
userRouter.get("/ratedRes", userController.getRatedRes);

// POST Order Food
userRouter.post("/order", userController.handleOrder)

export default userRouter