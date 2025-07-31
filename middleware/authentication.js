const User = require("../model/user");
const { verifyToken } = require("../helper/jwt");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      return res.status(401).json({ message: "Missing access token" });
    }

    const payload = verifyToken(access_token);
    if (!payload || !payload.id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await User.findById(payload.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = {
      id: user._id,
      email: user.email,
      name: user.name,
    };

    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res
      .status(500)
      .json({ message: "Authentication failed", error: error.message });
  }
};

module.exports = authentication;
