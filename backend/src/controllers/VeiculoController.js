const { Veiculo } = require('../models');

// LISTAR TODOS
const listarVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículos' });
  }
};

// BUSCAR POR ID
const buscarVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);

    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado' });
    }

    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículo' });
  }
};

// CRIAR
const criarVeiculo = async (req, res) => {
  try {
    const novo = await Veiculo.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar veículo' });
  }
};

// ATUALIZAR
const atualizarVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);

    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado' });
    }

    await veiculo.update(req.body);
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar veículo' });
  }
};

// DELETAR
const deletarVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);

    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado' });
    }

    await veiculo.destroy();
    res.json({ message: 'Veículo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar veículo' });
  }
};

module.exports = {
  listarVeiculos,
  buscarVeiculo,
  criarVeiculo,
  atualizarVeiculo,
  deletarVeiculo,
};