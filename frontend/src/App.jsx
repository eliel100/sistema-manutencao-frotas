import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Veiculos from './pages/Veiculos';
import TiposServico from './pages/TiposServico';
import Manutencoes from './pages/Manutencoes';
import MeuPerfil from './pages/MeuPerfil';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container mt-4">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Cadastro (FALTAVA ISSO) */}
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Rotas protegidas */}
          <Route
            path="/veiculos"
            element={
              <ProtectedRoute>
                <Veiculos />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tipos-servico"
            element={
              <ProtectedRoute>
                <TiposServico />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manutencoes"
            element={
              <ProtectedRoute>
                <Manutencoes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/meu-perfil"
            element={
              <ProtectedRoute>
                <MeuPerfil />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;