import { Router } from 'express';

const eventsRouter = Router();

let clientes: Response[] = [];

// Rota para o frontend se conectar e receber eventos em tempo real
eventsRouter.get('/', (req, res) => {

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Cache-Control', 'no-cache');

  clientes.push(res);

  req.on('close', () => {
    clientes = clientes.filter(client => client !== res);
  });
});

export const emitEvent = (eventName: string, payload: any) => {
  const message = `data: ${JSON.stringify({ eventName, ...payload })}\n\n`;
  clientes.forEach(client => client.write(message));
};

export default eventsRouter;