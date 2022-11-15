import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';



function App() {
  return (
    <Router>
    <Barra/>
    <Route path="/form" element={<Registro />}></Route>
    
  </Router>
  );
}

export default App;
