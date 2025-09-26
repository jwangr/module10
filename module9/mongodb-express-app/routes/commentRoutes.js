import { Router } from "express";
import CommentController from "../controllers/commentController.js";
const controller = new CommentController();

const commentRoutes = Router();

// gets all the posts ('/posts')
commentRoutes.get('/', (req, res) => {
    controller.getAllComments(req, res);
})

// create new user via router.post
commentRoutes.post('/create', (req, res) => {
    controller.createComment(req.body, res);
})

// updates new user via PUT method 
commentRoutes.put('/:id', (req, res) => {
    controller.updateComment(req, res)
})

// deletes user via DELETE method
commentRoutes.delete('/:id', (req, res) => {
    controller.deleteComment(req, res)
})

export default commentRoutes;