const { TipoServico } = require('../models');

// LISTAR TODOS
const listarTiposServico = async (req, res) => {
  try {
    const tipos = await TipoServico.findAll();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipos de serviço' });
  }
};

// BUSCAR POR ID
const buscarTipoServico = async (req, res) => {
  try {
    const tipo = await TipoServico.findByPk(req.params.id);

    if (!tipo) {
      return res.status(404).json({ error: 'Tipo de serviço não encontrado' });
    }

    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipo de serviço' });
  }
};

// CRIAR
const criarTipoServico = async (req, res) => {
  try {
    const novo = await TipoServico.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tipo de serviço' });
  }
};

// ATUALIZAR
const atualizarTipoServico = async (req, res) => {
  try {
    const tipo = await TipoServico.findByPk(req.params.id);

    if (!tipo) {
      return res.status(404).json({ error: 'Tipo de serviço não encontrado' });
    }

    await tipo.update(req.body);
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tipo de serviço' });
  }
};

// DELETAR
const deletarTipoServico = async (req, res) => {
  try {
    const tipo = await TipoServico.findByPk(req.params.id);

    if (!tipo) {
      return res.status(404).json({ error: 'Tipo de serviço não encontrado' });
    }

    await tipo.destroy();
    res.json({ message: 'Tipo de serviço deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tipo de serviço' });
  }
};

module.exports = {
  listarTiposServico,
  buscarTipoServico,
  criarTipoServico,
  atualizarTipoServico,
  deletarTipoServico,
};