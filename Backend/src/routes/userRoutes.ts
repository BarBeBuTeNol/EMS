import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

export default router;
