import { Router } from 'express';

const adminRouter = Router();

adminRouter.get('/audit', (req, res) => {
  res.json( "token:jwt129084yqrguahsnjdaosiugdb187d894948124b8x6f3gnhj" );
});

export default adminRouter;