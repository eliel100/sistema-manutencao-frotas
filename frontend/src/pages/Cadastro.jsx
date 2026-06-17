import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/usuarios', {
        nome,
        email,
        senha,
      });

      alert('Usuário criado com sucesso!');
      navigate('/login');

    } catch (error) {
      console.error(error);
      alert('Erro ao criar usuário');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="text-center mb-4">
              Cadastro
            </h2>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-2"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />

              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />

              <button className="btn btn-success w-100">
                Criar conta
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;