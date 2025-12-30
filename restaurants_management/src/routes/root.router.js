import express from 'express'
import restaurantRouter from './restaurant.router.js'
import userRouter from './user.router.js'

const rootRouter = express.Router()

rootRouter.use("/restaurant", restaurantRouter)
rootRouter.use("/user", userRouter)

export default rootRouter