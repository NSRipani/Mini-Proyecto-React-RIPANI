import { useState } from "react";
import './botones.css';
import Swal from 'sweetalert2';

const Botones = ({saveProd}) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    
    const handleAddToCart = () => {
        if (count === 0) {
            return;
        }
        saveProd(count)
        setCount(0)

        // Muestra la alerta de SweetAlert
        Swal.fire({
            title: 'Producto agregado!',
            text: `Has agregado ${count} producto(s) al carrito.`,
            icon: 'success',
            customClass: {
                title: 'sweetalert-title',
                content: 'sweetalert-content',
                confirmButton: 'sweetalert-button'
            },
            background: '#333',
            color: '#fff', 
            buttonsStyling: false
        });
    }

    return (
        <div className="Contenedor">
            <div className="Botonera">
                <button id="Boton" onClick={handleDecrement}> - </button>
                <h4 id="Cantidad">{count}</h4>
                <button id="Boton" onClick={handleIncrement}> + </button>
            </div>
            <div className="btn-carrito">
                <button onClick={handleAddToCart} disabled={count === 0}>
                    AGREGAR AL CARRITO
                </button>
            </div>
        </div>
    );
};

export default Botones;
