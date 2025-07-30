const express = require("express");
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const { inputValidator } = require("../middleware/inputValidator");

router.post("/users", inputValidator, registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", inputValidator, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
