import { useEffect, useState } from 'react';
import api from '../services/api';

function TiposServico() {
  const [tiposServico, setTiposServico] = useState([]);

  const [idEditando, setIdEditando] = useState(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  async function carregarTiposServico() {
    try {
      const resposta = await api.get('/tipos-servico');
      setTiposServico(resposta.data);
    } catch (error) {
      alert('Erro ao carregar tipos de serviço');
    }
  }

  function limparFormulario() {
    setIdEditando(null);
    setNome('');
    setDescricao('');
  }

  async function salvarTipoServico(event) {
    event.preventDefault();

    const dadosTipoServico = {
      nome,
      descricao,
    };

    try {
      if (idEditando) {
        await api.put(`/tipos-servico/${idEditando}`, dadosTipoServico);
      } else {
        await api.post('/tipos-servico', dadosTipoServico);
      }

      limparFormulario();
      carregarTiposServico();
    } catch (error) {
      alert('Erro ao salvar tipo de serviço');
    }
  }

  function editarTipoServico(tipoServico) {
    setIdEditando(tipoServico.id);
    setNome(tipoServico.nome);
    setDescricao(tipoServico.descricao);
  }

  async function excluirTipoServico(id) {
    const confirmar = window.confirm(
      'Deseja realmente excluir este tipo de serviço?'
    );

    if (!confirmar) {
      return;
    }

    try {
      await api.delete(`/tipos-servico/${id}`);
      carregarTiposServico();
    } catch (error) {
      alert('Erro ao excluir tipo de serviço');
    }
  }

  useEffect(() => {
    carregarTiposServico();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Tipos de Serviço</h2>

      <div className="card shadow border-0">
        <div className="card-body">
          <h5 className="card-title mb-4">
            {idEditando ? 'Editar tipo de serviço' : 'Cadastrar tipo de serviço'}
          </h5>

          <form onSubmit={salvarTipoServico}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Nome</label>

                <input
                  type="text"
                  className="form-control"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-8 mb-3">
                <label className="form-label">Descrição</label>

                <input
                  type="text"
                  className="form-control"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-3">
              <button type="submit" className="btn btn-primary me-2">
                {idEditando ? 'Atualizar' : 'Salvar'}
              </button>

              {idEditando && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={limparFormulario}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow border-0 mt-4">
        <div className="card-body">
          <h5 className="card-title mb-4">Lista de Tipos de Serviço</h5>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th width="180">Ações</th>
                </tr>
              </thead>

              <tbody>
                {tiposServico.map((tipoServico) => (
                  <tr key={tipoServico.id}>
                    <td>{tipoServico.id}</td>
                    <td>{tipoServico.nome}</td>
                    <td>{tipoServico.descricao}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editarTipoServico(tipoServico)}
                      >
                        Editar
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => excluirTipoServico(tipoServico.id)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiposServico;