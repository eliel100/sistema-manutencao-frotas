const sequelize = require('../config/database');

const Veiculo = require('./Veiculo');
const TipoServico = require('./TipoServico');
const Manutencao = require('./Manutencao');

Veiculo.hasMany(Manutencao, {
  foreignKey: 'veiculo_id',
});

Manutencao.belongsTo(Veiculo, {
  foreignKey: 'veiculo_id',
});

TipoServico.hasMany(Manutencao, {
  foreignKey: 'tipo_servico_id',
});

Manutencao.belongsTo(TipoServico, {
  foreignKey: 'tipo_servico_id',
});

module.exports = {
  sequelize,
  Veiculo,
  TipoServico,
  Manutencao,
};