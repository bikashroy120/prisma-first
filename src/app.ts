import express from "express"
import cors from "cors"
import { UserRouter } from "./moduels/user/user.route"
import { CategoryRouter } from "./moduels/category/category.route"
import { PostRouter } from "./moduels/post/post.route"



const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/user", UserRouter)
app.use("/api/v1/category", CategoryRouter)
app.use("/api/v1/post", PostRouter)


export default app