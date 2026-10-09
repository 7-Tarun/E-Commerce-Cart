import CartItem from "./components/CartItems"
import CartSummery from "./components/CartSummary"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"

function App() {

  return (
    <>
      <Header />
      <ProductCard/>
      {/* <CartItem/> */}
      {/* <CartSummery/> */}
      <Cart/>
    </>
  )
}

export default App