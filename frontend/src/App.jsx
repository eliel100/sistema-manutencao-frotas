import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Veiculos from './pages/Veiculos';
import TiposServico from './pages/TiposServico';
import Manutencoes from './pages/Manutencoes';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/veiculos" element={<Veiculos />} />

          <Route
            path="/tipos-servico"
            element={<TiposServico />}
          />

          <Route
            path="/manutencoes"
            element={<Manutencoes />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;