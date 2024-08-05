import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fetchData from '../../fetchData'
import './productDetail.css'

const ProductDetail = ({ productos = [] }) => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [producto,setProducto] = useState(null)
  
  useEffect(() => {
    fetchData()
      .then(response => {
        const product = response.find((p) => p.id === parseInt(id));
        setProducto(product);
      });
  },[])
 
  return (
    <div className="conteiner-datelle">
      <div className="fondo">
        <div className="product-detail">
          <img id="product-image" src={producto?.image} alt={producto?.name}/>
          <div className="product-info">
            <h1 id="product-title">{producto?.name}</h1>
            <p id="product-description">{producto?.description}</p>
            <span id="product-price">$ {producto?.price}</span>
          </div>
        </div>
      </div>
      <button id='volver' onClick={() => navigate(-1)} >VOLVER</button>
    </div>

  )
};
export default ProductDetail