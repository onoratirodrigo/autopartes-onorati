import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// **esto era para la entrega del ItemCount**
  // import ItemCount from './components/ItemCount/ItemCount';
  // import { useState } from 'react';
// **esto era para la entrega del ItemCount**

function App() {

  // **esto era para la entrega del ItemCount**
    // const [add, onAdd] = useState(1)
    // const initial = 1
    // const stock = 6
  // **esto era para la entrega del ItemCount**


  return (
    <div className="App">
      <Header/>
      <ItemListContainer something='Mi E-Commerce'/>
      <ItemDetailContainer />
      {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} add={add}/> */}
      {/* imagen desde public  se pone la ruta como si ya estuviera parado en public*/}
      {/* imagen desde src importar la imagen 'import logo from 'link_carpeta'*/}
      {/* imagen desde link */}


    </div>
  );
}

export default App;
