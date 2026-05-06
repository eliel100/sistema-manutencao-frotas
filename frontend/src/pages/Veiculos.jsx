import { useEffect, useState } from 'react';
import api from '../services/api';

function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);

  const [idEditando, setIdEditando] = useState(null);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const [quilometragem, setQuilometragem] = useState('');

  async function carregarVeiculos() {
    try {
      const resposta = await api.get('/veiculos');
      setVeiculos(resposta.data);
    } catch (error) {
      alert('Erro ao carregar veículos');
    }
  }

  function limparFormulario() {
    setIdEditando(null);
    setMarca('');
    setModelo('');
    setAno('');
    setPlaca('');
    setQuilometragem('');
  }

  async function salvarVeiculo(event) {
    event.preventDefault();

    const dadosVeiculo = {
      marca,
      modelo,
      ano,
      placa,
      quilometragem,
    };

    try {
      if (idEditando) {
        await api.put(`/veiculos/${idEditando}`, dadosVeiculo);
      } else {
        await api.post('/veiculos', dadosVeiculo);
      }

      limparFormulario();
      carregarVeiculos();
    } catch (error) {
      alert('Erro ao salvar veículo');
    }
  }

  function editarVeiculo(veiculo) {
    setIdEditando(veiculo.id);
    setMarca(veiculo.marca);
    setModelo(veiculo.modelo);
    setAno(veiculo.ano);
    setPlaca(veiculo.placa);
    setQuilometragem(veiculo.quilometragem);
  }

  async function excluirVeiculo(id) {
    const confirmar = window.confirm(
      'Deseja realmente excluir este veículo?'
    );

    if (!confirmar) {
      return;
    }

    try {
      await api.delete(`/veiculos/${id}`);
      carregarVeiculos();
    } catch (error) {
      alert('Erro ao excluir veículo');
    }
  }

  useEffect(() => {
    carregarVeiculos();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Veículos</h2>
      </div>

      <div className="card shadow border-0">
        <div className="card-body">
          <h5 className="card-title mb-4">
            {idEditando ? 'Editar veículo' : 'Cadastrar veículo'}
          </h5>

          <form onSubmit={salvarVeiculo}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Marca</label>

                <input
                  type="text"
                  className="form-control"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Modelo</label>

                <input
                  type="text"
                  className="form-control"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Ano</label>

                <input
                  type="number"
                  className="form-control"
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Placa</label>

                <input
                  type="text"
                  className="form-control"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
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
          <h5 className="card-title mb-4">
            Lista de Veículos
          </h5>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Ano</th>
                  <th>Placa</th>
                  <th>Quilometragem</th>
                  <th width="180">Ações</th>
                </tr>
              </thead>

              <tbody>
                {veiculos.map((veiculo) => (
                  <tr key={veiculo.id}>
                    <td>{veiculo.id}</td>
                    <td>{veiculo.marca}</td>
                    <td>{veiculo.modelo}</td>
                    <td>{veiculo.ano}</td>
                    <td>{veiculo.placa}</td>
                    <td>{veiculo.quilometragem} km</td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editarVeiculo(veiculo)}
                      >
                        Editar
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => excluirVeiculo(veiculo.id)}
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

export default Veiculos;