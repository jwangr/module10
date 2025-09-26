import e from "express";
import { Router } from "express";
import userController from "../controllers/userController.js";

const controller = new userController();

const userRoutes = Router();

// gets all the users at this endpoint
userRoutes.get('/', (req, res) => {
    controller.getUsers(req, res);
})

// create new user via router.post
userRoutes.post('/create', (req, res) => {
    controller.createUser(req.body, res);
})

// updates new user via PUT method 
userRoutes.put('/:id', (req, res) => {
    controller.updateUser(req, res)
})

// deletes user via DELETE method
userRoutes.delete('/:id', (req, res) => {
    controller.deleteUser(req, res)
})

export default userRoutes;