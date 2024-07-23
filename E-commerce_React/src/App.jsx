import './App.css'
import BarraNav from './component/navBar/navBar.jsx'
import ContenedorItemList from './component/itenmsListConteiner/contenedor-lista-items.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Error404 from './component/error404/error404.jsx'
import Home from './component/home/home.jsx'
import Contacto from './component/contacto/contacto.jsx'
import ProductDetail from './component/detalleProducto/productDetail.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/productos" element={<ContenedorItemList consumidor={"PRODUCTOS"} />}/>
          <Route path="/detalle/:id" element={<ProductDetail/>}/>
          <Route path="*" element={<Error404 />}/>
          <Route path="/servivios" element={<Error404 />}/>
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
