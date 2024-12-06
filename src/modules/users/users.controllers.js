import User from "./models/user.js";

const getAllUsers = async () => {
  return User.findAll();
}

const getLastUser = async (lastUser) => {
  const lastUserAll = await User.findAll({where:{fio: lastUser}, raw: true });

  return lastUserAll;
}

const createUser = async (user) => {
  return User.create(user);
}

export { getAllUsers, createUser, getLastUser };
