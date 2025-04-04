import { Request, Response } from "express";
import {
  Item,
  addItem,
  getItemById,
  getAllItems,
  updateItem,
  deleteItem,
} from "../models/item";

export const createItem = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newItem = addItem(name);
  res.status(201).json(newItem);
};

export const getItem = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const item = getItemById(id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
};

export const getItems = (req: Request, res: Response) => {
  const items = getAllItems();
  res.json(items);
};

export const updateExistingItem = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const updatedItem = updateItem(id, name);
  if (!updatedItem) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(updatedItem);
};

export const deleteExistingItem = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const isDeleted = deleteItem(id);
  if (!isDeleted) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.status(204).send();
};
