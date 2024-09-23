import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import { CartProvider } from "./components/context/CartContext";
import CartListContainer from "./components/CartListContainer";
import BuyFormComponent from "./components/BuyFormComponent";

function App() {
 

  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <NavBarComponent />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />

              <Route
                exact
                path="/category/:catId"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/item/:prodId"
                element={<ItemDetailContainer />}
              />
              <Route exact path="/cart" element={<CartListContainer />} />
              <Route exact path="/buy" element={<BuyFormComponent />} />
            </Routes>
          </CartProvider>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
