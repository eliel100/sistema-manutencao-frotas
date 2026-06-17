const sequelize = require('../config/database');

const Veiculo = require('./Veiculo');
const TipoServico = require('./TipoServico');
const Manutencao = require('./Manutencao');
const Usuario = require('./Usuario');

// Relacionamento Veículo -> Manutenções
Veiculo.hasMany(Manutencao, {
  foreignKey: 'veiculo_id',
});

Manutencao.belongsTo(Veiculo, {
  foreignKey: 'veiculo_id',
});

// Relacionamento Tipo de Serviço -> Manutenções
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
  Usuario,
};