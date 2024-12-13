import './App.css'
import Home from './components/Home'
import { useState } from 'react';
import NavBar from './components/NavBar'

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  function addToCart(menu) {
    setCart([...cart, menu]);
  }
  console.log(search)
  return (
    <>
      <NavBar cart={cart} setSearch={setSearch}/>
      <Home onAddToCart={addToCart} search={search}/>
    </>
  )
}

export default App
