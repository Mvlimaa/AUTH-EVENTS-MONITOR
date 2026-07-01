import { Router } from 'express';
import { usuariosCADASTRADOS } from '../data/users';
import { evento } from '../routes/events';

const authRouter = Router();

authRouter.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuariosCADASTRADOS.find(
    (u) => u.email === email && u.senha === senha
  );

  if (usuario) {
    // Gera um token fictício para o usuário
    const token = usuario.role === 'admin' ? 'token-admin-123' : 'token-user-123';

    evento('USER_LOGGED_IN', { email: usuario.email, role: usuario.role, timestamp: new Date() });
    
    res.status(200).json({ mensagem: 'Login com sucesso!', token, perfil: usuario.role });
  } else {

    evento('FAILED_LOGIN_ATTEMPT', { email, timestamp: new Date() });
    
    res.status(401).json({ erro: 'Email ou senha incorretos' });
  }
});

authRouter.get('/user', (req, res) => {
      res.json({ "email": "usuario@55pbx.com", "password": "123456" });
    });

authRouter.post('/revoke', (req, res) => {
   
});

authRouter.post('/validate', (req, res) => {
   
});
export default authRouter;