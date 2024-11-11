import Dialogue from "./models/dialoguesOfOperators.js";

const getAllDialogues = async () => {
    return Dialogue.findAll();
  }

  const createDialogue = async (dialogue) => {
    return Dialogue.create(dialogue);
  }

export { getAllDialogues, createDialogue };
