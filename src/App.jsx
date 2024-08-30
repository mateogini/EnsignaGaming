import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCardComponent from './components/ItemCardComponent';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element =<ItemListContainer saludo='Hola Coder'/>/>
        <Route exact path = "/categoria/:catId" element= <ItemListContainer/>/>
        <Route exact path = "/producto/prod:Id" element = <ItemCardComponent/>/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
