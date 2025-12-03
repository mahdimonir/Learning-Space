import { Request, Response } from "express";
import { userServices } from "./user.service";

// Created User
const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User Created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Users
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsers();

    res.status(200).json({
      success: true,
      message: "Users retrived successfully",
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

// Get Single User
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getSingleUser(req.params.id as string);

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User retrived successfully",
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

// Update User
const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.updateUser(
      req.body,
      req.params.id as string
    );

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
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

// Delete User
const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.deleteUser(req.params.id as string);

    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
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

export const userControllers = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
