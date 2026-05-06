const express = require('express');
const router = express.Router();

const {
  listarVeiculos,
  buscarVeiculo,
  criarVeiculo,
  atualizarVeiculo,
  deletarVeiculo,
} = require('../controllers/veiculoController');

router.get('/veiculos', listarVeiculos);
router.get('/veiculos/:id', buscarVeiculo);
router.post('/veiculos', criarVeiculo);
router.put('/veiculos/:id', atualizarVeiculo);
router.delete('/veiculos/:id', deletarVeiculo);

module.exports = router;