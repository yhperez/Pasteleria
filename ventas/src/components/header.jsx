import {Link} from 'react-router-dom';

const Header = ()=> {
  return (
    <div>
  <div class="d1">
  <h1><b>Bakery Onze</b></h1>
  </div>
  <header class="header">
     <ul class="menu">
        <li><a href="Login">Acceso</a></li>
        <li><a href="Productos">Productos</a></li>
        <li><a href="Gestionpd">Gestor de productos</a></li>
        <li><a href="#">Gestor de ventas</a></li>
        <li><a href="Ventas">Ventas</a></li>
        <li><a href="Usuariorg">Gestor de usuarios</a></li> 
      </ul>
    </header>
    </div>
  );
}
export default Header;




