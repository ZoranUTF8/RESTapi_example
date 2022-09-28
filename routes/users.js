import express from "express";
const router = express.Router();
import {
  readUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

//? Get all users
router.get("/", readUsers);

//? Add a new user with a custom id
router.post("/", createUser);

//? Return a specific user
router.get("/:id", createUser);

//? Delete a specific user
router.delete("/:id", deleteUser);

//? Update a specific user
router.patch("/:id", updateUser);

export default router;
