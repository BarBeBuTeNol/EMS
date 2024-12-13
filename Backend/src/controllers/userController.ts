import { Request, Response } from "express";
import * as userModel from "../models/userModel";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, age } = req.body;
    await userModel.addUser({ name, email, age });
    res.status(201).json({ message: "User added successfully." });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await userModel.deleteUser(Number(id));
    res.json({ message: "User deleted successfully." });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    await userModel.updateUser(Number(id), { name, email, age });
    res.json({ message: "User updated successfully." });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};