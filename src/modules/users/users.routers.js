import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });

export default router;
