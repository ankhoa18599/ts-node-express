import express from "express";
import {
  createItem,
  getItem,
  getItems,
  updateExistingItem,
  deleteExistingItem,
} from "../controllers/itemController";

const router = express.Router();

router.post("/items", createItem as express.RequestHandler);
router.get("/items/:id", getItem as express.RequestHandler);
router.get("/items", getItems);
router.put("/items/:id", updateExistingItem as express.RequestHandler);
router.delete("/items/:id", deleteExistingItem as express.RequestHandler);

export default router;
