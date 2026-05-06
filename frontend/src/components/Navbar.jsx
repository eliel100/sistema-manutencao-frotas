import { Link } from 'react-router-dom';

function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;