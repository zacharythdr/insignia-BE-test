const User = require("../model/user");
const { hashPassword } = require("../helper/bcrypt");

const registerUser = async (req, res) => {
  console.log("ini controller!");

  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
};
