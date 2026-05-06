const { Manutencao, Veiculo, TipoServico } = require('../models');

// LISTAR TODAS
const listarManutencoes = async (req, res) => {
  try {
    const manutencoes = await Manutencao.findAll({
      include: [Veiculo, TipoServico],
    });

    res.json(manutencoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar manutenções' });
  }
};

// BUSCAR POR ID
const buscarManutencao = async (req, res) => {
  try {
    const manutencao = await Manutencao.findByPk(req.params.id, {
      include: [Veiculo, TipoServico],
    });

    if (!manutencao) {
      return res.status(404).json({ error: 'Manutenção não encontrada' });
    }

    res.json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar manutenção' });
  }
};

// CRIAR
const criarManutencao = async (req, res) => {
  try {
    const { veiculo_id, tipo_servico_id } = req.body;

    const veiculo = await Veiculo.findByPk(veiculo_id);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado' });
    }

    const tipoServico = await TipoServico.findByPk(tipo_servico_id);
    if (!tipoServico) {
      return res.status(404).json({ error: 'Tipo de serviço não encontrado' });
    }

    const nova = await Manutencao.create(req.body);

    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar manutenção' });
  }
};

// ATUALIZAR
const atualizarManutencao = async (req, res) => {
  try {
    const manutencao = await Manutencao.findByPk(req.params.id);

    if (!manutencao) {
      return res.status(404).json({ error: 'Manutenção não encontrada' });
    }

    await manutencao.update(req.body);
    res.json(manutencao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar manutenção' });
  }
};

// DELETAR
const deletarManutencao = async (req, res) => {
  try {
    const manutencao = await Manutencao.findByPk(req.params.id);

    if (!manutencao) {
      return res.status(404).json({ error: 'Manutenção não encontrada' });
    }

    await manutencao.destroy();
    res.json({ message: 'Manutenção deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar manutenção' });
  }
};

module.exports = {
  listarManutencoes,
  buscarManutencao,
  criarManutencao,
  atualizarManutencao,
  deletarManutencao,
};