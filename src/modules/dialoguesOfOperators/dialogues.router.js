import { Router } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getAllDialogues, createDialogue } from "./dialogues.controllers.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const dialogues = await getAllDialogues();
      res.status(200).send(dialogues);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.post("/", async (req, res) => {
    try {
      const { fio, jobTitle, dataClient, dataStatus, progress, questions } = req.body;
  
      await createDialogue({
        fio,
		    jobTitle,
		    dataClient,
		    dataStatus,
		    progress,
		    questions,      
        profile: "dialogues",    
      });
  
      res.status(201).send("Данные о диалоге внесены");
    } catch (error) {
      res.status(500).send(error);
    }
  });

export default router;
