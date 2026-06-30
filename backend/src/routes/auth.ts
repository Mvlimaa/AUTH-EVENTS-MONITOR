import { Router } from 'express';

const authRouter = Router();

authRouter.post('/cadastrarUser', (req, res) => {
   
});

authRouter.get('/user', (req, res) => {
  res.json({ "email": "usuario@55pbx.com", "password": "123456" });
});

authRouter.post('.revoke', (req, res) => {
   
});

authRouter.post('/validate', (req, res) => {
   
});
export default authRouter;