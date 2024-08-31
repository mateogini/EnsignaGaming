import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBarComponent/>
      <Routes>
        <Route exact path ="/" element ={<ItemListContainer/>}/>
        <Route exact path = "/category/:catId" element= {<ItemListContainer/>}/>
        <Route exact path = "/item/:prodId" element = {<ItemDetailContainer/>}/>
      </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
