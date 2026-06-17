const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const {
  listarTiposServico,
  buscarTipoServico,
  criarTipoServico,
  atualizarTipoServico,
  deletarTipoServico,
} = require('../controllers/tipoServicoController');

router.get('/tipos-servico', auth, listarTiposServico);
router.get('/tipos-servico/:id', auth, buscarTipoServico);
router.post('/tipos-servico', auth, criarTipoServico);
router.put('/tipos-servico/:id', auth, atualizarTipoServico);

// Somente administrador pode excluir
router.delete('/tipos-servico/:id', auth, admin, deletarTipoServico);

module.exports = router;