import User from "./models/user.js";

const getAllUsers = async () => {
    return User.findAll();
  }

  const createUser = async (user) => {
    return User.create(user);
  }

export { getAllUsers, createUser };
