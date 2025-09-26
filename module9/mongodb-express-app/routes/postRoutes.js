import { Router } from "express";
import PostController from "../controllers/post-controller.js";
const controller = new PostController();

const postRoutes = Router();

// gets all the posts ('/posts')
postRoutes.get('/', (req, res) => {
    controller.getPosts(req, res);
})

// create new user via router.post
postRoutes.post('/create', (req, res) => {
    controller.createPost(req.body, res);
})

// updates new user via PUT method 
postRoutes.put('/:id', (req, res) => {
    controller.updatePost(req, res)
})

// deletes user via DELETE method
postRoutes.delete('/:id', (req, res) => {
    controller.deletePost(req, res)
})

export default postRoutes;