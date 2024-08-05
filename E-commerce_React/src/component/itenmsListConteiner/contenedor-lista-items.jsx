import { useState, useEffect } from 'react'
import fetchData from '../../fetchData'
import Items from '../items/items.jsx'
import ProductFilter from '../filtro/filtro.jsx'
import './contenedor_lista-items.css'
import Loaders from '../loaders/loaders.jsx'

const ContenedorItemList = () => {
    
    const [productos, setProductos] = useState([]);
    const [filtradpProductos, setFiltradoProductos] = useState([]);
    
    useEffect(() => {
        fetchData()
        .then(response => {
            setProductos(response);
            setFiltradoProductos(response); 
            });
    }, []);

    const handleFilter = (category) => {
        const filtered = category
            ? productos.filter(product => product.category === category)
            : productos;
    
        setFiltradoProductos(filtered);
    };
    

    const category = [
        { id: 1, name: 'Ropa' },
        { id: 2, name: 'Calzado' },
        { id: 3, name: 'Hogar' },
        { id: 4, name: 'Libros' },
        { id: 5, name: 'Accesorios' },
    ];

    return (
        productos.length === 0 ?
        <Loaders/> :
        <div className='Conteiner-listItem'>
            <h2 id='title'>PRODUCTOS</h2>
            <ProductFilter categories={category} onFilter={handleFilter} />
            <Items productos={filtradpProductos} />
        </div>
    );
};

export default ContenedorItemList