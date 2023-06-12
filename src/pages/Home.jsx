import React from 'react'

import ItemListsContainer from '../components/ItemListsContainer';
import Accion from '../assets/img/Accion.jpg'


export const Home = () => {
    return (
        <div className="App">
           
            <ItemListsContainer greeting="Mi primer pagina con React. Y mi primer componente." />
            <img src={Accion} alt="" />
            <footer>
                <p>&copy; Emiliano Ramos</p>
            </footer>
        </div>
    );
};

export default Home;