const express = require('express');
const router = express.Router();

const {
  listarManutencoes,
  buscarManutencao,
  criarManutencao,
  atualizarManutencao,
  deletarManutencao,
} = require('../controllers/manutencaoController');

router.get('/manutencoes', listarManutencoes);
router.get('/manutencoes/:id', buscarManutencao);
router.post('/manutencoes', criarManutencao);
router.put('/manutencoes/:id', atualizarManutencao);
router.delete('/manutencoes/:id', deletarManutencao);

module.exports = router;