import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from './context/CartContext';

function App() {
  return (
    <>
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Mostrar todos los productos */}
          <Route path='/' element={<ItemListContainer/>} />
          {/* Mostrar todos los productos de una categoria */}
          <Route path='/category/:id' element={<ItemListContainer/>} />
          {/* Mostrar un producto */}
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          {/* Mostrar carrito */}
          <Route path='/cart/' element={<Cart/>} />

        </Routes>
      </BrowserRouter>
    </CartContext>
    </>
  );
}

export default App;
