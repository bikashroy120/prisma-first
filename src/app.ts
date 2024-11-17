import express from "express"
import cors from "cors"
import { UserRouter } from "./moduels/user/user.route"



const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/user", UserRouter)


export default app