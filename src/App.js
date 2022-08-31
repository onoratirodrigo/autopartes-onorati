import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter className="App">
      <Header/>
      <Routes>
        
        <Route path='/' element={<ItemListContainer something='Mi E-Commerce'/>}/>

        <Route path='/category/:id' element={<ItemListContainer/>}/>

        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

      </Routes>
      {/* imagen desde public  se pone la ruta como si ya estuviera parado en public*/}
      {/* imagen desde src importar la imagen 'import logo from 'link_carpeta'*/}
      {/* imagen desde link */}


    </BrowserRouter>
  );
}

export default App;
