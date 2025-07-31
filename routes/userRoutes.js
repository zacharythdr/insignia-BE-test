const express = require("express");
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require("../controller/userController");
const { inputValidator } = require("../middleware/inputValidator");
const authentication = require("../middleware/authentication");

router.post("/", inputValidator, registerUser);
router.post("/login", login);
router.use(authentication);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", inputValidator, updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
