import { useEffect, useState } from 'react';
import api from '../services/api';

function MeuPerfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function carregarPerfil() {
    try {
      const resposta = await api.get('/me');

      setNome(resposta.data.nome);
      setEmail(resposta.data.email);
    } catch (error) {
      alert('Erro ao carregar perfil');
    }
  }

  async function salvarPerfil(e) {
    e.preventDefault();

    try {
      await api.put('/me', {
        nome,
        email,
        senha: senha || undefined,
      });

      alert('Perfil atualizado com sucesso');

      setSenha('');
    } catch (error) {
      alert('Erro ao atualizar perfil');
    }
  }

  useEffect(() => {
    carregarPerfil();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Meu Perfil</h2>

      <div className="card shadow">
        <div className="card-body">

          <form onSubmit={salvarPerfil}>

            <div className="mb-3">
              <label className="form-label">
                Nome
              </label>

              <input
                type="text"
                className="form-control"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                E-mail
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Nova Senha
              </label>

              <input
                type="password"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              type="submit"
            >
              Salvar Alterações
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default MeuPerfil;