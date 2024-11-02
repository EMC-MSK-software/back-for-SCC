import { DataTypes } from "sequelize"; 

import sequelize from "../../../db/db.js";

const User = sequelize.define("users", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    fio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile: {
        type: DataTypes.STRING,        
    }
    
});

export default User;