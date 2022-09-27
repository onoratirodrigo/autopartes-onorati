import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter className="App">
        <Header/>
        <Routes>
          
          <Route path='/' element={<ItemListContainer something='ETMAN'/>}/>

          <Route path='/category/:id' element={<ItemListContainer/>}/>

          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

          <Route path='/cart' element={<Cart/>}/>

        </Routes>


      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
