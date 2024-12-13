import db from "../config/db.ts";

interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
  created_at?: Date;
}

export const getAllUsers = async (): Promise<User[]> => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows as User[];
};

export const addUser = async (user: User): Promise<void> => {
  const { name, email, age } = user;
  await db.query("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", [
    name,
    email,
    age,
  ]);
};

export const deleteUser = async (id: number): Promise<void> => {
  await db.query("DELETE FROM users WHERE id = ?", [id]);
};

export const updateUser = async (id: number, user: User): Promise<void> => {
  const { name, email, age } = user;
  await db.query(
    "UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?",
    [name, email, age, id]
  );
};
