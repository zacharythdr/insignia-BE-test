const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/userController");
const { validateRegister } = require("../middleware/validateRegister");

router.post("/register", validateRegister, registerUser);

module.exports = router;
