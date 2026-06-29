import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

//teste.
app.get('/User', (req: Request, res: Response) => {
  res.json({ "email": "usuario@55pbx.com", "password": "123456" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Porta do Servidor http://localhost:${PORT}`);
});