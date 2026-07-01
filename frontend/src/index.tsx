import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (evento: React.FormEvent) => {
    evento.preventDefault();

    try {
      const resposta = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, senha: senha })
      });

      const dados = await resposta.json();
      console.log('Resposta do Servidor:', dados);

    } catch (erro) {
      console.log('Erro de conexão.', erro);
    }
  };

  return (
    <>
      <header>
        <div className="usuario_container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.151)', width: '35%', marginLeft: '15%' }}>
          <h1>Usuario:</h1>
          <p>Perfil:</p>
          <p>Token de acesso:</p>
          <p>Sessão Status:</p>
        </div>

        <div className="eventos_container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.151)', width: '25%', marginLeft: '15%' }}>
          <h1>Eventos em tempo real:</h1>
          <p></p>
        </div>
        <button id="btnValidar" className="btn_validar">Validar</button>
        <button id="btnRevogar" className="btn_revogar">Revogar</button>
        <button id="btnAdmin" className="btn_admin">Administrador</button>
      </header>

      {/* codigo Reutilizado de minha autoria. */}
      <div className="login_container" style={{
            maxWidth: '320px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '32px',
            width: '320px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(10px)',
            alignSelf: 'center',
            marginLeft: '40%'
      }}>
        <h1>Auth Events Monitor</h1>
        <p>Insira suas credenciais para continuar</p>
        
        <form onSubmit={handleLogin}>
            <div className="input_login">
                <label htmlFor="usuario">Email</label>
                <input 
                  type="email" 
                  id="usuario" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira seu Email" 
                  required 
                />
            </div>
            
            <div className="input_login">
                <label htmlFor="senha">Senha</label>
                <input 
                  type="password" 
                  id="senha" 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Insira sua senha" 
                  required 
                />
            </div>
            <button type="submit" id="btn_login">Login</button>
        </form>
      </div>
    </>
  );
}

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);