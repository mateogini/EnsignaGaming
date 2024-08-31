import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element =<ItemListContainer saludo='Hola Coder'/>/>
        <Route exact path = "/category/:catId" element= <ItemListContainer/>/>
        <Route exact path = "/item/prod:Id" element = <ItemDetailContainer/>/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
