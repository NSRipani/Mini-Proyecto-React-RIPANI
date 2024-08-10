import './App.css'
import BarraNav from './component/navBar/navBar.jsx'
import ContenedorItemList from './component/itenmsListConteiner/contenedor-lista-items.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error404 from './component/error404/error404.jsx'
import Home from './component/home/home.jsx'
import Contacto from './component/contacto/contacto.jsx'
import ProductDetail from './component/detalleProducto/productDetail.jsx'
import {CarroProvider} from './component/context/context.jsx'
import CartView from './component/cartView/cartView.jsx'
import Orders from './component/orders/orders.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <CarroProvider>
      <BrowserRouter>
        <BarraNav />
        <ToastContainer/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/productos" element={<ContenedorItemList />}/>
          <Route path="/detalle/:id" element={<ProductDetail/>}/>
          <Route path="*" element={<Error404 />}/>
          <Route path="/servivios" element={<Error404 />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path='/carrito' exact element={<CartView/>}/>
          <Route path='/carrito/compra' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
    </CarroProvider>
  )
}

export default App
