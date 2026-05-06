const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./models');

const veiculoRoutes = require('./routes/veiculoRoutes');
const tipoServicoRoutes = require('./routes/tipoServicoRoutes');
const manutencaoRoutes = require('./routes/manutencaoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(veiculoRoutes);
app.use(tipoServicoRoutes);
app.use(manutencaoRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando 🚀' });
});

sequelize.sync({ alter: true });

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco realizada com sucesso');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar com o banco:', error);
  });