const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');

// Cadastrar usuário
const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;

    const usuarioExistente = await Usuario.findOne({
      where: { email },
    });

    if (usuarioExistente) {
      return res.status(400).json({
        error: 'E-mail já cadastrado',
      });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      nome,
      email,
      senha: senhaCriptografada,
      tipo: tipo || 'usuario',
    });

    res.status(201).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      tipo: usuario.tipo,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Erro ao cadastrar usuário',
    });
  }
};

// Visualizar perfil
const meuPerfil = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: ['id', 'nome', 'email', 'tipo'],
    });

    if (!usuario) {
      return res.status(404).json({
        error: 'Usuário não encontrado',
      });
    }

    res.json(usuario);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Erro ao buscar perfil',
    });
  }
};

// Atualizar perfil
const atualizarPerfil = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({
        error: 'Usuário não encontrado',
      });
    }

    const { nome, email, senha } = req.body;

    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;

    if (senha) {
      usuario.senha = await bcrypt.hash(senha, 10);
    }

    await usuario.save();

    res.json({
      message: 'Perfil atualizado com sucesso',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipo: usuario.tipo,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Erro ao atualizar perfil',
    });
  }
};

module.exports = {
  cadastrarUsuario,
  meuPerfil,
  atualizarPerfil,
};