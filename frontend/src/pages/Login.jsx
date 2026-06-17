import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await api.post('/login', {
        email,
        senha,
      });

      login(
        resposta.data.usuario,
        resposta.data.token
      );

      navigate('/');
    } catch (error) {
      console.error(error);

      alert('E-mail ou senha inválidos');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  E-mail
                </label>

                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Senha
                </label>

                <input
                  type="password"
                  className="form-control"
                  value={senha}
                  onChange={(e) =>
                    setSenha(e.target.value)
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;