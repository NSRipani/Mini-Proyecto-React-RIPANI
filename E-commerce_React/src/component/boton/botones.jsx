import { useState } from "react"
import './botones.css'

const Botones = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
    // Agrega la lógica para agregar el producto al carrito
        console.log('Producto agregado al carrito');
    }
    return(
            <div className="Contenedor">
                <div className="Botonera">
                    <button className="Boton" onClick={handleIncrement}> + </button>
                    <h4 className="Cantidad" onClick={handleAddToCart}>{count}</h4>
                    <button className="Boton" onClick={handleDecrement}> - </button>
                </div>
                <div className="btn-carrito">
                    <button>AGREGAR AL CARRITO</button>
                </div>
            </div>
        )
    }

export default Botones