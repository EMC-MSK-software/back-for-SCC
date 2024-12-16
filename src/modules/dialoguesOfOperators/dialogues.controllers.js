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

  const dialoguesRecords = await Dialogue.findAll({ where: { subDiv: choise }, raw: true });
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

const getParamsDialogues = async (params) => {
  let dialoguesRecords;
  switch (Object.keys(params)[0]) {
    case "nameList":
      dialoguesRecords = await Dialogue.findAll({ where: { fio: params.nameList }, raw: true });
      break;

    case "subDivList":
      dialoguesRecords = await Dialogue.findAll({ where: { subDiv: params.subDivList }, raw: true });
      break;

    case "statusList":
      dialoguesRecords = await Dialogue.findAll({ where: { dataStatus: params.statusList }, raw: true });
      break;

    default:
      break;
  }
  
  const formattedRecords = dialoguesRecords.map((record) => {
    let dialoguesSort = [];
    const formattedRecord = record;
    formattedRecord.createdAt = moment(formattedRecord.createdAt)
      .tz("UTC")
      .utcOffset(180)
      .format("YYYY-MM-DD HH:mm:ss");
    formattedRecord.updatedAt = moment(formattedRecord.updatedAt).tz('UTC').utcOffset(180).format('YYYY-MM-DD HH:mm:ss');

    if (formattedRecord.createdAt.slice(0, -9) >= params.createdAtFrom & formattedRecord.createdAt.slice(0, -9) <= params.createdAtTo) {
      dialoguesSort.push(formattedRecord);
    }

    // if (dialoguesSort.length != 0) {
    //   return dialoguesSort;
    // } else {
    //   return formattedRecord;
    // }
    return dialoguesSort;
    // return formattedRecord;
  });

  return formattedRecords.flat(2);
}

const createDialogue = async (dialogue) => {
  return Dialogue.create(dialogue);
}

export { getAllDialogues, createDialogue, getSubDivDialogues, getParamsDialogues };
