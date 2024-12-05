import moment from "moment-timezone";

import Dialogue from "./models/dialoguesOfOperators.js";

const getAllDialogues = async () => {

  // return Dialogue.findAll();

  const dialoguesRecords = await Dialogue.findAll();
  const formattedRecords = dialoguesRecords.map((record) => {
    const formattedRecord = record;
    formattedRecord.createdAt = moment(formattedRecord.createdAt)
      .tz("UTC")
      .utcOffset(180)
      .format("YYYY-MM-DD HH:mm:ss");
    formattedRecord.updatedAt = moment(formattedRecord.updatedAt).tz('UTC').utcOffset(180).format('YYYY-MM-DD HH:mm:ss');
    // console.log(formattedRecord);
    return formattedRecord;
  });

  return formattedRecords;

}

const getSubDivDialogues = async (choise) => {

  // return Dialogue.findAll();

  const dialoguesRecords = await Dialogue.findAll({where:{subDiv: choise}, raw: true });
  // const serchRecords = dialoguesRecords.filter((el) => {el.subDiv = choise});

  // console.log(serchRecords);
  
  const formattedRecords = dialoguesRecords.map((record) => {
    const formattedRecord = record;
    formattedRecord.createdAt = moment(formattedRecord.createdAt)
      .tz("UTC")
      .utcOffset(180)
      .format("YYYY-MM-DD HH:mm:ss");
    formattedRecord.updatedAt = moment(formattedRecord.updatedAt).tz('UTC').utcOffset(180).format('YYYY-MM-DD HH:mm:ss');
    console.log(formattedRecord);
    return formattedRecord;
  });

  return formattedRecords;

}

const createDialogue = async (dialogue) => {
  return Dialogue.create(dialogue);
}

export { getAllDialogues, createDialogue, getSubDivDialogues };
