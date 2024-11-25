import { Request, Response } from "express";
import { CategoryServices } from "./category.services";

const createCategory = async (req: Request, res: Response) => {
    try {

        const data = req.body;

        const result = await CategoryServices.createCategoryServices(data)

        res.status(201).json({
            success: true,
            message: "Category created",
            data: result
        })
    } catch (error) {
        const err = error as Error
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


const getCategory = async (req: Request, res: Response) => {
    try {
        const result = await CategoryServices.getCategoryServices()

        res.status(201).json({
            success: true,
            message: "Category created",
            data: result
        })
    } catch (error) {
        const err = error as Error
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


export const CategoryController = {
    createCategory,
    getCategory
}