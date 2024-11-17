import express from 'express';
import { CategoryServices } from './category.services';
import { CategoryController } from './category.controller';


const route = express.Router()

route.post("/create", CategoryController.createCategory)
route.get("/", CategoryController.getCategory)

export const CategoryRouter = route