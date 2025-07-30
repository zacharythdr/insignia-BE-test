const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const comparePassword = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
};

module.exports = { hashPassword, comparePassword };
