import { Router } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getAllUsers, createUser, getLastUser } from "./users.controllers.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/reg", async (req, res) => {
  try {
    const dataOfVisiteur = req.query.fio;
    const lastUserData = await getLastUser(dataOfVisiteur);
    res.status(200).send(lastUserData[lastUserData.length-1]);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/auth", async (req, res) => {
  try {
    const { job_title, login, fio, mail } = req.body;

    await createUser({
      job_title,
      login,
      fio,
      mail,
      profile: "user",
    });

    res.status(201).send("Запись создана!");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/reg", async (req, res) => {
  try {
    const { fio, job_title } = req.body;

    await createUser({      
      fio,
      job_title      
    });

    res.status(201).send("Запись создана!");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
