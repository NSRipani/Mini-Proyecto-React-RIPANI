import React, { useState } from 'react';
import './orders.css'
import { useCarroContext } from '../context/context';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const { orderSave } = useCarroContext()
    const negative = useNavigate()
    const volver = () => {
        negative('/carrito')
    }
    const [data, setData] = useState({
        nombre: '', direccion: '', telefono: '',email:'',});

    const handlecambio = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    // Confirmar compra
    const handleSubmit = (e) => {
        e.preventDefault();

        orderSave(data);
        setData({nombre:'',direccion:'',telefono:'',email:''});

        // Muestra la alerta de SweetAlert
        Swal.fire({
            title: 'Formulario de compra',
            text: `Felicitaciones ${data.nombre}! Logró su compra con exito...`,
            icon: 'success',
            customClass: {
                title: 'sweetalert-title',
                content: 'sweetalert-content',
                confirmButton: 'sweetalert-button'
            },
            background: '#333',
            color: '#fff', 
            buttonsStyling: false,
            timer: 3000,
            timerProgressBar: true 
        });
    };

    return (
        <div className="Ordenes">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" name='nombre' value={data.nombre} onChange={handlecambio} required />
                </div>
                <div>
                    <label>Dirección: </label>
                    <input type="text" name='direccion' value={data.direccion} onChange={handlecambio} required /></div>
                <div>
                    <label>Teléfono: </label>
                    <input type="tel" name='telefono' value={data.telefono} onChange={handlecambio} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name='email' value={data.email} onChange={handlecambio} required />
                </div>
                <div className='button'>
                    <button id='confirmar' type="submit">CONFIRMAR COMPRA</button>
                </div>
            </form>
            <button id='volver' onClick={volver}>VOLVER AL CARRITO</button>
        </div>
    );
};

export default Orders;
