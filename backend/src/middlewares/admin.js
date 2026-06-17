module.exports = (req, res, next) => {
  if (req.usuario.tipo !== 'admin') {
    return res.status(403).json({
      error: 'Acesso permitido apenas para administradores',
    });
  }

  next();
};