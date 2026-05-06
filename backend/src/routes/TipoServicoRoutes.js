const express = require('express');
const router = express.Router();

const {
  listarTiposServico,
  buscarTipoServico,
  criarTipoServico,
  atualizarTipoServico,
  deletarTipoServico,
} = require('../controllers/tipoServicoController');

router.get('/tipos-servico', listarTiposServico);
router.get('/tipos-servico/:id', buscarTipoServico);
router.post('/tipos-servico', criarTipoServico);
router.put('/tipos-servico/:id', atualizarTipoServico);
router.delete('/tipos-servico/:id', deletarTipoServico);

module.exports = router;