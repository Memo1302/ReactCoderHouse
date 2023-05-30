import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListsContainer from './components/ItemListsContainer';
import Accion from './assets/img/Accion.jpg'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListsContainer greeting="Mi primer pagina con React. Y mi primer componente."/>
      <img src={Accion} alt="" />
      <footer>
        <p>&copy; Emiliano Ramos</p>
    </footer>
    </div>
  );
};

export default App;
