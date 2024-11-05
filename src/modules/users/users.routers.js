import { Router } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getAllUsers, createUser } from "./users.controllers.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.post("/auth", async (req, res) => {
    try {
      const { login, fio, mail } = req.body;
  
      await createUser({
        login,
        fio,
        mail,        
        profile: "user",    
      });
  
      res.status(201).send("Пользователь создан");
    } catch (error) {
      res.status(500).send(error);
    }
  });

export default router;
