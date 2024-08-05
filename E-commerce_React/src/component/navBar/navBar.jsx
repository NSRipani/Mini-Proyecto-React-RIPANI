import { Link } from "react-router-dom"
import Carrito from "../img-carrito/carroImagen.jsx"
import './navbar.css'

const BarraNav = () => {
   
    return (
        <nav className="nav">
            <div className="img-title">
                <div className="contro-comercial-conteiner">
                    <img id='contro-comercial' src="./src/assets/centro-comercial.png" alt="centro-comercial" />
                </div>
                <h1 id='titulo-ecommerse'>CENTRO COMERCIAL CORONDA</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to={"/home"}>HOME</Link>
                    </li>
                    <li>
                        <Link to={"/productos"}>PRODUCTOS</Link>
                    </li>
                    <li>
                        <Link to={"/servicios"}>SERVICIOS</Link>
                    </li>
                    <li>
                        <Link to={"/contacto"}>CONTACTO</Link>
                    </li> 
                </ul>
            </div>
            <Link to={"/carrito"}>
                <Carrito />
            </Link>
        </nav>
    )
}
export default BarraNav