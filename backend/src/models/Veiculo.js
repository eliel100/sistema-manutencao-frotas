const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Veiculo = sequelize.define('Veiculo', {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quilometragem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Veiculo;