import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Form from './components/Form/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <BrowserRouter className="App">
      <Header/>
      {/* <Form/> */}
      <Routes>
        
        <Route path='/' element={<ItemListContainer something='Mi E-Commerce'/>}/>

        <Route path='/category/:id' element={<ItemListContainer/>}/>

        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

        <Route path='/cart' element={<Cart/>}/>

      </Routes>
      {/* imagen desde public  se pone la ruta como si ya estuviera parado en public*/}
      {/* imagen desde src importar la imagen 'import logo from 'link_carpeta'*/}
      {/* imagen desde link */}


    </BrowserRouter>
  );
}

export default App;
