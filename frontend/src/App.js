import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import Login from './components/Login'
import Inicio from './components/Inicio';



function App() {
  return (
//Barra superior
    <div className="App">
      <nav className="navbar navbar-expand mb-4 navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="Inicio">MacroFood</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Login">Iniciar Sesión</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Registro">Registrarse</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>} exact></Route>
      <Route path="/Inicio" element={<Inicio/>} exact></Route>
      <Route path="/Registro" element={<Registro/>} exact></Route>
      <Route path="/Login" element={<Login />} exact></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
