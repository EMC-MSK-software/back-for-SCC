import User from "./user.js";

const getAllUsers = async () => {
    return User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password", "salt"]
      }
    });
  }

export { getAllUsers };
