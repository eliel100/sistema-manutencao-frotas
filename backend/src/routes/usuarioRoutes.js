const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const {
  cadastrarUsuario,
  meuPerfil,
  atualizarPerfil,
} = require('../controllers/usuarioController');

router.post('/usuarios', cadastrarUsuario);

router.get('/me', auth, meuPerfil);

router.put('/me', auth, atualizarPerfil);

module.exports = router;