import { Router } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { getAllDialogues, createDialogue, getSubDivDialogues, getParamsDialogues } from "./dialogues.controllers.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dialogues = await getAllDialogues();
    res.status(200).send(dialogues);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/select", async (req, res) => {
  try { 
    const subDiv = req.query.subDiv;

    const dialoguesSubDiv = await getSubDivDialogues(subDiv);
    
    // console.log(dialoguesSubDiv);

    res.status(200).json(dialoguesSubDiv);
    
  } catch (error) {
    res.status(500).send(`Данные не найдены!, ${error}`);
  }
});

router.get("/params", async (req, res) => {
  try { 
    const params = req.query.params;

    const dialoguesSubDiv = await getParamsDialogues(params); 
    
    // console.log(dialoguesSubDiv);

    res.status(200).json(dialoguesSubDiv);
    
  } catch (error) {
    res.status(500).send(`Данные не найдены!, ${error}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const { fio, jobTitle, dataClient, subDiv, dataStatus, progress, questions } = req.body;

    await createDialogue({
      fio,
      jobTitle,
      dataClient,
      subDiv,
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
