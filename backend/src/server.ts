import express from 'express';
import cors = require('cors');
import authRouter from './routes/auth'
import eventsRouter from './routes/events';
import adminRouter from'./routes/admin';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/events', eventsRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Porta do Servidor http://localhost:${PORT}`);
});