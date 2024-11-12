import express from "express";
import cors from "cors";

import sequelize from "./db/db.js";
import { dialogueRouter } from "./modules/dialoguesOfOperators/index.js";
import { usersRouter } from "./modules/users/index.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API = process.env.API || '/api/v1';
// const URL = `http://127.0.0.1:${PORT}/${API}`;

async function start () {
    try {        
        await sequelize.authenticate();
        await sequelize.sync();
        
        app.use(`${API}/dialogues`, dialogueRouter);        
        app.use(`${API}/users`, usersRouter);         

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);                                             
        });

    } catch (err) {
        throw new Error(err);
    }    
};

start();
