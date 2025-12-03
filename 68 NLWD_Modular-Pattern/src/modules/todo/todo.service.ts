import { pool } from "../../config/db";

// Created Todo
const createTodo = async (payload: Record<string, unknown>) => {
  const { user_id, title } = payload;
  const result = pool.query(
    `INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`,
    [user_id, title]
  );

  return result;
};

// Get Todos
const getTodos = async () => {
  const result = await pool.query(`SELECT * FROM todos`);

  return result;
};

// Get Single Todo
const getSingleTodo = async (id: string) => {
  const result = await pool.query(`SELECT * FROM todos WHERE id = $1`, [id]);

  return result;
};

// Update Todo
const updateTodo = async (payload: Record<string, unknown>, id: string) => {
  const { user_id, title } = payload;
  const result = await pool.query(
    `UPDATE todos SET user_id=$1, title=$2 WHERE id=$3 RETURNING *`,
    [user_id, title, id]
  );

  return result;
};

// Delete Todo
const deleteTodo = async (id: string) => {
  const result = await pool.query(`DELETE FROM todos WHERE id = $1`, [id]);

  return result;
};

export const todoServices = {
  createTodo,
  getTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
