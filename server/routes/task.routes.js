
import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../controllers/task.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { body } from "express-validator";
import { validate } from "../middleware/validate.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/", getTasks);

router.post(
  "/",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("priority")
      .optional()
      .isIn(["low", "medium", "high"])
      .withMessage("Invalid priority"),
  ],
  validate,
  createTask
);

router.put(
  "/:id",
  [
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("priority")
      .optional()
      .isIn(["low", "medium", "high"])
      .withMessage("Invalid priority"),
    body("status")
      .optional()
      .isIn(["pending", "completed"])
      .withMessage("Invalid status"),
  ],
  validate,
  updateTask
);

router.delete("/:id", deleteTask);

router.patch("/:id/toggle", toggleTaskStatus);

export default router;