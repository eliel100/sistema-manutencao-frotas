import banner from '../assets/imagem.jpg';

function Home() {
  return (
    <div>
      <div className="bg-dark text-white p-5 rounded shadow">
        <h1 className="display-5">
          Sistema de Manutenção de Frotas Automotivas🚗
        </h1>

        <p className="lead mt-3">
          Plataforma web desenvolvida para gerenciamento de veículos,
          manutenções automotivas e controle de serviços realizados.
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-md-8">
          <img
            src={banner}
            alt="Banner"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>Funcionalidades</h4>

              <ul className="mt-3">
                <li>Cadastro de veículos</li>
                <li>Controle de manutenções</li>
                <li>Tipos de serviços</li>
                <li>Histórico automotivo</li>
                <li>PWA instalável</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;