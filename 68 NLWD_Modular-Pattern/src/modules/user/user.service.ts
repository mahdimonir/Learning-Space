import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

// Created User
const createUser = async (payload: Record<string, unknown>) => {
  const { name, email, password, role } = payload;

  const hashedPassword = await bcrypt.hash(password as string, 10);

  const result = await pool.query(
    `INSERT INTO users(name, email, password, role) VALUES($1, $2, $3, $4) RETURNING *`,
    [name, email, hashedPassword, role]
  );

  return result;
};

// Get Users
const getUsers = async () => {
  const result = await pool.query(`SELECT * FROM users`);

  return result;
};

// Get Single User
const getSingleUser = async (id: string) => {
  const result = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);

  return result;
};

// Update User
const updateUser = async (payload: Record<string, unknown>, id: string) => {
  const { name, email } = payload;
  const result = await pool.query(
    `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
    [name, email, id]
  );

  return result;
};

// Delete User
const deleteUser = async (id: string) => {
  const result = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);

  return result;
};

export const userServices = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
