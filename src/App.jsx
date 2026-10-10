import Header from "./components/Header"
import Cart from "./components/Cart"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App