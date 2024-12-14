import { Outlet, Link } from "react-router-dom";
import './AdminDashBoard.css';

function AdminDashboard() {
  return (
    <div className="navigation">
        <div className="nav-box"> 
          <h2>Panel de Administrador</h2>
          <p>Accede a tu lector personalizado para revisar tus documentos.</p>
          <Link to="/">Inicio</Link>
        </div>


        <div className="nav-box"> 
            <h3>Reader</h3> 
            <p>Accede a tu lector personalizado para verificar la identidad de algun funcionario de nunestra institucion.</p>
            <Link to="readeru">Reader</Link>
        </div>
        <div className="nav-box"> 
          <h3>Generador</h3> 
          <p>Crea codigos para los carnets de la institucion</p> 
          <Link to="generators">Generador</Link>
        </div>

      <hr />
      <Outlet />
    </div>
  );
}
export default AdminDashboard;
