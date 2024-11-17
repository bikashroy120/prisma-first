import { Request, Response } from "express";
import { PostServices } from "./post.services";


const createPosts = async (req: Request, res: Response) => {
    try {

        const data = req.body;

        const result = await PostServices.createPostServices(data)

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


const getPosts = async (req: Request, res: Response) => {
    try {

        const query = req.query;

        const result = await PostServices.getPostServices(query)

        res.status(200).json({
            success: true,
            message: "Category created",
            total: result.total,
            data: result.data
        })
    } catch (error) {
        const err = error as Error
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


export const PostController = {
    getPosts,
    createPosts
}