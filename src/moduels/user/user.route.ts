import express from 'express';
import { UserController } from './user.controller';

const route = express.Router()

route.post("/create", UserController.createUser)
route.post("/profile-update", UserController.updateProfile)
route.get("/", UserController.getUser)

export const UserRouter = route