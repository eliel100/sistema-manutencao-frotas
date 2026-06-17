const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const {
  listarVeiculos,
  buscarVeiculo,
  criarVeiculo,
  atualizarVeiculo,
  deletarVeiculo,
} = require('../controllers/veiculoController');

router.get('/veiculos', auth, listarVeiculos);
router.get('/veiculos/:id', auth, buscarVeiculo);
router.post('/veiculos', auth, criarVeiculo);
router.put('/veiculos/:id', auth, atualizarVeiculo);

// Somente administrador pode excluir
router.delete('/veiculos/:id', auth, admin, deletarVeiculo);

module.exports = router;