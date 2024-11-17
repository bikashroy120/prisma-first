import { Request, Response } from "express";
import { UserServices } from "./user.services";



const createUser = async (req: Request, res: Response) => {
    try {

        const data = req.body;

        const result = await UserServices.createUserServices(data)

        res.status(201).json({
            success: true,
            message: "User created",
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


const updateProfile = async (req: Request, res: Response) => {
    try {

        const data = req.body;
        const result = await UserServices.createUpdateProfile(data)

        res.status(201).json({
            success: true,
            message: "Profile created or update",
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



const getUser = async (req: Request, res: Response) => {
    try {

        const result = await UserServices.getUser()

        res.status(201).json({
            success: true,
            message: "Profile created or update",
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


export const UserController = {
    createUser,
    updateProfile,
    getUser
}