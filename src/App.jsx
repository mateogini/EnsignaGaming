import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBarComponent from './components/NavBarComponent'

function App() {

  return (
    <>
      <NavBarComponent/>
      <ItemListContainer saludo='Hola Coder'/>
    </>
  )
}

export default App
