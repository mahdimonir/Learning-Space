import { Router } from "express";
import auth from "../../middleware/auth";
import { userControllers } from "./user.controller";

const router = Router();

// Created User
router.post("/", userControllers.createUser);

// Get Users
router.get("/", auth("admin"), userControllers.getUsers);

// Get Single User
router.get("/:id", userControllers.getSingleUser);

// Update User
router.put("/:id", userControllers.updateUser);

// Delete User
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
