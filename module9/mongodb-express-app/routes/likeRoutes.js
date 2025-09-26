import { Router } from "express";
import LikeController from "../controllers/likeController.js";
const controller = new LikeController();

const likeRoutes = Router();

// gets all the likes ('/likes')
likeRoutes.get('/', (req, res) => {
    controller.getlikes(req, res);
})

// create new user via router.like
likeRoutes.post('/create', (req, res) => {
    controller.createLike(req.body, res);
})

// updates new user via PUT method 
likeRoutes.put('/:id', (req, res) => {
    controller.updateLike(req, res)
})

// deletes user via DELETE method
likeRoutes.delete('/:id', (req, res) => {
    controller.deleteLike(req, res)
})

export default likeRoutes;