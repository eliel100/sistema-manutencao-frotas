import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { usuario, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Gestão de Frotas Automotivas
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/veiculos">
            Veículos
          </Link>

          <Link className="nav-link" to="/tipos-servico">
            Tipos de Serviço
          </Link>

          <Link className="nav-link" to="/manutencoes">
            Manutenções
          </Link>

          {!usuario && (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}

          {usuario && (
            <>
              <Link
                className="nav-link text-info"
                to="/meu-perfil"
              >
                {usuario.nome}
              </Link>

              <button
                className="btn btn-sm btn-outline-light ms-2"
                onClick={logout}
              >
                Sair
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;