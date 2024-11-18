import { DataTypes, Model } from "sequelize"; 

import sequelize from "../../../db/db.js";

const Dialogue = sequelize.define("dialogues", { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    jobTitle: {
        type: DataTypes.STRING(10000),
        allowNull: true,
        unique: false,
    },
    fio: {
        type: DataTypes.STRING(10000),
        allowNull: false,
        unique: false,
    },
    dataClient: {
        type: DataTypes.STRING(10000),
        allowNull: true,
    },
    subDiv: {
        type: DataTypes.STRING(10000),
        allowNull: true,       
    },
    dataStatus: {
        type: DataTypes.STRING(10000),
        allowNull: true,       
    },    
    progress: {
        type: DataTypes.INTEGER,
        allowNull: true,       
    },
    questions: {
        type: DataTypes.STRING(10000),
        allowNull: true,       
    },
    profile: {
        type: DataTypes.STRING,        
    }
    
});

export default Dialogue;
