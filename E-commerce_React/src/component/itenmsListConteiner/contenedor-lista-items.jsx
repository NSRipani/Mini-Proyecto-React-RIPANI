import { useState, useEffect } from 'react'
import fetchData from '../../fetchData'
import Items from '../items/items.jsx'
import ProductFilter from '../filtro/filtro.jsx'
import './contenedor_lista-items.css'

const ContenedorItemList = ({ consumidor }) => {
    const [productos, setProductos] = useState([]);
    const [filtradpProductos, setFiltradpProductos] = useState([]);
    
    useEffect(() => {
        fetchData()
            .then(response => {
                setProductos(response);
                setFiltradpProductos(response); 
            });
    }, []);

    const handleFilter = (category) => {
        const filtered = category 
            ? productos.filter(product => product.category === category) 
            : productos;
    
            setFiltradpProductos(filtered);
    };
    

    const category = [
        { id: 1, name: 'Ropa' },
        { id: 2, name: 'Calzado' },
        { id: 3, name: 'Hogar' },
        { id: 4, name: 'Libros' },
        { id: 5, name: 'Accesorio' },
    ];

    return (
        <div className='Conteiner-listItem'>
            <h2 id='title'>{consumidor}</h2>
            <ProductFilter categories={category} onFilter={handleFilter} />
            <Items productos={filtradpProductos} />
        </div>
    );
};

export default ContenedorItemList