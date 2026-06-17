const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Usuario } = require('../models');

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: { email },
    });

    if (!usuario) {
      return res.status(401).json({
        error: 'E-mail ou senha inválidos',
      });
    }

    const senhaValida = await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaValida) {
      return res.status(401).json({
        error: 'E-mail ou senha inválidos',
      });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        tipo: usuario.tipo,
      },
      process.env.JWT_SECRET || 'segredo_super_secreto',
      {
        expiresIn: '1d',
      }
    );

    res.json({
      token,
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
      error: 'Erro ao realizar login',
    });
  }
};

module.exports = {
  login,
};