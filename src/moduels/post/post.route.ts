import express from 'express';
import { PostController } from './post.controller';



const route = express.Router()

route.post("/create", PostController.createPosts)
route.get("/", PostController.getPosts)

export const PostRouter = route