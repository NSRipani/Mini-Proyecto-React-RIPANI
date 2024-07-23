import React, { useState } from 'react';
import './filtro.css'
const ProductFilter = ({ categories, onFilter }) => {
  const [seleccionarCategoria, setSeleccionarCategoria] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSeleccionarCategoria(category);
    onFilter(category);
  };

  return (
    <div className="filter-container">
      <h2 id='h2'>Filtrar por categoría</h2>
      <select value={seleccionarCategoria} onChange={handleCategoryChange}>
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
