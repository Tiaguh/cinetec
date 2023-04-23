import express from 'express';
import db from '../services/userServices.js';

const router = express.Router();

router.post('/create-user', async (req, res) => {
  const { name, email, password, typeUser } = req.body;

  if (!name || !email || !password || !typeUser) res.status(400).json({ message: "Insira todos os dados" })

  await db.createUser(name, email, password, typeUser);

  res.status(200).send({ message: "Salvo com sucesso!" });
});

export default router;