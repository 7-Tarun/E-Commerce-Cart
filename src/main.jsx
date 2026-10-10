import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Cart from './components/Cart.jsx'
import ProductList from './components/ProductList.jsx'

const queryClient = new QueryClient;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      {/* Index route ka matlab default home page */}
      <Route index element={<ProductList />} />
      <Route path='/Cart' element={<Cart/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <StrictMode>
        <RouterProvider router={router}/>
      </StrictMode>,
    </CartProvider>
  </QueryClientProvider>
)