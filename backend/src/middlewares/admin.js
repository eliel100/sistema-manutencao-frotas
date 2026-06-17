const admin = (req, res, next) => {
  if (req.usuario.tipo !== 'admin') {
    return res.status(403).json({
      error: 'Acesso permitido somente para administradores',
    });
  }

  next();
};

module.exports = admin;