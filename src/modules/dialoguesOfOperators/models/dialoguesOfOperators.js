import { DataTypes, Model } from "sequelize"; 

import sequelize from "../../../db/db.js";

const Dialogue = sequelize.define("dialogue", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    fio: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    dataClient: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dataStatus: {
        type: DataTypes.STRING,
        allowNull: true,       
    },    
    progress: {
        type: DataTypes.NUMBER,
        allowNull: true,       
    },
    questions: {
        type: DataTypes.STRING,
        allowNull: true,       
    },
    profile: {
        type: DataTypes.STRING,        
    }
    
});

export default Dialogue;
