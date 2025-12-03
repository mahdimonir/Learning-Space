import { Router } from "express";
import { todoControllers } from "./todo.controller";

const router = Router();

// Created Todo
router.post("/", todoControllers.createTodo);

// Get Todos
router.get("/", todoControllers.getTodos);

// Get Single Todo
router.get("/:id", todoControllers.getSingleTodo);

// Update Todo
router.put("/:id", todoControllers.updateTodo);

// Delete Todo
router.delete("/:id", todoControllers.deleteTodo);

export const todoRoutes = router;
