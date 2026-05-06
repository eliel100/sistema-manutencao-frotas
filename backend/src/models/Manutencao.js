const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Manutencao = sequelize.define('Manutencao', {
  data_manutencao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quilometragem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Manutencao;