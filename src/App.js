import './App.css';
import Header from './components/Header/Header';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';

function App() {

  const [add, onAdd] = useState(0)
  const initial = 0
  const stock = 6


  return (
    <div className="App">
      <Header/>
      <ItemListContainer something='saludo'/>
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} add={add}/>
      {/* imagen desde public  se pone la ruta como si ya estuviera parado en public*/}
      {/* imagen desde src importar la imagen 'import logo from 'link_carpeta'*/}
      {/* imagen desde link */}


    </div>
  );
}

export default App;
