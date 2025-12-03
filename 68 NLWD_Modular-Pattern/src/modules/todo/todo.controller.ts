import { Request, Response } from "express";
import { todoServices } from "./todo.service";

// Created Todo
const createTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.createTodo(req.body);

    res.status(201).json({
      success: true,
      message: "Todo Created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Todos
const getTodos = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getTodos();

    res.status(200).json({
      success: true,
      message: "Todos retrived successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

// Get Single Todo
const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.getSingleTodo(req.params.id as string);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo retrived successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

// Update Todo
const updateTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.updateTodo(
      req.body,
      req.params.id as string
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

// Delete Todo
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoServices.deleteTodo(req.params.id as string);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

export const todoControllers = {
  createTodo,
  getTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
