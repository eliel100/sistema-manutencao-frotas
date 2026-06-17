const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: 'Token não informado',
      });
    }

    const [, token] = authHeader.split(' ');

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'segredo_super_secreto'
    );

    req.usuario = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      error: 'Token inválido',
    });
  }
};

module.exports = auth;