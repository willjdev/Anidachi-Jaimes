import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from './context/CartContext';
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';
import Footer from './components/Footer';




function App() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxEpuzEQazGYAhpIngngeg1v55oPIuzjw",
    authDomain: "anidachi-eb060.firebaseapp.com",
    projectId: "anidachi-eb060",
    storageBucket: "anidachi-eb060.appspot.com",
    messagingSenderId: "973520723133",
    appId: "1:973520723133:web:5023f8379468f89bb16bd4"
  };
  
  initializeApp(firebaseConfig);


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
          {/* Mostrar checkout */}
          <Route path='/checkout/' element={<Checkout/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContext>
    </>
  );
}

export default App;
