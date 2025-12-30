import express from "express";
import './src/models/init.model.js'
import rootRouter from "./src/routes/root.router.js";

const app = express()

app.use(express.json());

app.use("/api", rootRouter)


const port = 3071;
app.listen(port, () => {
    console.log(`☑️  Server online at: ${port}`)
})