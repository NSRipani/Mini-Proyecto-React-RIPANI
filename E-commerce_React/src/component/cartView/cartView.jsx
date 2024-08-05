import React from 'react'
import './cartView.css'
import { useCarroContext } from '../context/context';
import { Link } from "react-router-dom"

const CartView = () => {
  const {cart,removeFromCart, productoOrden} = useCarroContext()
  // const [show, setShow] = useState(true); // Estado para controlar la visibilidad
  
  // Calcular el total de los precios
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2);
  
  // if (!show) {
  //   return null;
  // }

  return (
    <div className="cartView-content" >
      <h1>CARRITO DE COMPRAS</h1>
      <ul id='subtitle'>
        <li id='pro'>Producto</li>
        <li id='nom'>Nombre</li>
        <li id='cant'>Cantidad</li>
        <li id='precU'>Precio unit.</li>
        <li>Precio total</li>
        <li>Eliminar</li>
      </ul>
      {cart.map((item, index) => (
        <ul key={index} id='item'>
          <li><img src={item.image} alt={item.name}></img></li>
          <li><p>{item.name}</p></li>
          <li><p>{item.count}</p></li>
          <li><p>$ {item.price}</p></li>
          <li><p>$ {(item.price * item.count).toFixed(2)}</p></li>
          <li><button id='delete' onClick={() => removeFromCart(item.id)}>X</button></li>
        </ul>
      ))}

      <h3 id='total'>Total: ${total}</h3> 
      <Link to={'/carrito/compra'}>
        <button id='fin-compra' >FINALIZAR COMPRA</button>
      </Link>
    </div>
  );
};

export default CartView;