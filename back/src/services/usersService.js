const User = require("../models/User");

getUsers: async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

createUser: async (username, email, password) => {};

module.exports = {
  getUsers,
  createUser,
};
