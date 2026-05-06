const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoServico = sequelize.define('TipoServico', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TipoServico;