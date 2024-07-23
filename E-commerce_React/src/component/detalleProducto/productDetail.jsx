import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../fetchData'
import './productDetail.css'
const ProductDetail = ({ productos = [] }) => {
  const { id } = useParams()
  const [producto,setProducto] = useState(null)
  
  useEffect(() => {
    fetchData()
      .then(response => {
        const product = response.find((p) => p.id === parseInt(id));
        setProducto(product);
      });
  },[])
 
  return (
    <div className="fondo">
      <div className="product-detail">
        <img className="product-image" src={producto?.image} image={producto?.image}/>
        <div className="product-info">
            <h1 id="product-title">Nombre del Producto: {producto?.name}</h1>
            <p id="product-description">Descripción: {producto?.description}</p>
            <span id="product-price">Precio: $ {producto?.price}</span>
        </div>
      </div>
    </div>

  )
};
export default ProductDetail