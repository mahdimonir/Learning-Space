import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { authRoutes } from "./modules/auth/auth.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { userRoutes } from "./modules/user/user.routes";

const app = express();

// parser
app.use(express.json());

// DB
initDB();

// routes
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello Next Level Web Developer!");
});

// user routes
app.use("/users", userRoutes);

// todo routes
app.use("/todos", todoRoutes);

// auth routes
app.use("/auth", authRoutes);

// not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

export default app;
