import { useEffect, useState } from 'react';
import api from '../services/api';

function Manutencoes() {
  const [manutencoes, setManutencoes] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [tiposServico, setTiposServico] = useState([]);

  const [idEditando, setIdEditando] = useState(null);
  const [veiculoId, setVeiculoId] = useState('');
  const [tipoServicoId, setTipoServicoId] = useState('');
  const [dataManutencao, setDataManutencao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [quilometragem, setQuilometragem] = useState('');

  async function carregarDados() {
    try {
      const respostaManutencoes = await api.get('/manutencoes');
      const respostaVeiculos = await api.get('/veiculos');
      const respostaTiposServico = await api.get('/tipos-servico');

      setManutencoes(respostaManutencoes.data);
      setVeiculos(respostaVeiculos.data);
      setTiposServico(respostaTiposServico.data);
    } catch (error) {
      alert('Erro ao carregar dados');
    }
  }

  function limparFormulario() {
    setIdEditando(null);
    setVeiculoId('');
    setTipoServicoId('');
    setDataManutencao('');
    setDescricao('');
    setValor('');
    setQuilometragem('');
  }

  async function salvarManutencao(event) {
    event.preventDefault();

    const dadosManutencao = {
      veiculo_id: veiculoId,
      tipo_servico_id: tipoServicoId,
      data_manutencao: dataManutencao,
      descricao,
      valor,
      quilometragem,
    };

    try {
      if (idEditando) {
        await api.put(`/manutencoes/${idEditando}`, dadosManutencao);
      } else {
        await api.post('/manutencoes', dadosManutencao);
      }

      limparFormulario();
      carregarDados();
    } catch (error) {
      alert('Erro ao salvar manutenção');
    }
  }

  function editarManutencao(manutencao) {
    setIdEditando(manutencao.id);
    setVeiculoId(manutencao.veiculo_id);
    setTipoServicoId(manutencao.tipo_servico_id);
    setDataManutencao(manutencao.data_manutencao);
    setDescricao(manutencao.descricao);
    setValor(manutencao.valor);
    setQuilometragem(manutencao.quilometragem);
  }

  async function excluirManutencao(id) {
    const confirmar = window.confirm('Deseja realmente excluir esta manutenção?');

    if (!confirmar) {
      return;
    }

    try {
      await api.delete(`/manutencoes/${id}`);
      carregarDados();
    } catch (error) {
      alert('Erro ao excluir manutenção');
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Manutenções</h2>

      <div className="card shadow border-0">
        <div className="card-body">
          <h5 className="card-title mb-4">
            {idEditando ? 'Editar manutenção' : 'Cadastrar manutenção'}
          </h5>

          <form onSubmit={salvarManutencao}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Veículo</label>

                <select
                  className="form-select"
                  value={veiculoId}
                  onChange={(e) => setVeiculoId(e.target.value)}
                  required
                >
                  <option value="">Selecione um veículo</option>

                  {veiculos.map((veiculo) => (
                    <option key={veiculo.id} value={veiculo.id}>
                      {veiculo.marca} {veiculo.modelo} - {veiculo.placa}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Tipo de Serviço</label>

                <select
                  className="form-select"
                  value={tipoServicoId}
                  onChange={(e) => setTipoServicoId(e.target.value)}
                  required
                >
                  <option value="">Selecione um tipo</option>

                  {tiposServico.map((tipoServico) => (
                    <option key={tipoServico.id} value={tipoServico.id}>
                      {tipoServico.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Data</label>

                <input
                  type="date"
                  className="form-control"
                  value={dataManutencao}
                  onChange={(e) => setDataManutencao(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Valor</label>

                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Quilometragem</label>

                <input
                  type="number"
                  className="form-control"
                  value={quilometragem}
                  onChange={(e) => setQuilometragem(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-12 mb-3">
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
          <h5 className="card-title mb-4">Lista de Manutenções</h5>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Veículo</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>KM</th>
                  <th width="180">Ações</th>
                </tr>
              </thead>

              <tbody>
                {manutencoes.map((manutencao) => (
                  <tr key={manutencao.id}>
                    <td>{manutencao.id}</td>

                    <td>
                      {manutencao.Veiculo?.marca}{' '}
                      {manutencao.Veiculo?.modelo}
                    </td>

                    <td>{manutencao.TipoServico?.nome}</td>
                    <td>{manutencao.data_manutencao}</td>
                    <td>{manutencao.descricao}</td>
                    <td>R$ {manutencao.valor}</td>
                    <td>{manutencao.quilometragem} km</td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editarManutencao(manutencao)}
                      >
                        Editar
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => excluirManutencao(manutencao.id)}
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

export default Manutencoes;