import React, { useState } from 'react';
import './contacto.css'
import Swal from 'sweetalert2';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
  
    // Muestra la alerta de SweetAlert
    Swal.fire({
      title: 'Envio de mensaje',
      text: `${formData.name}, sus datos han sido enviado a nuestras recepciones.\n\n
        A la brevedad ser recibida para su procesamiento y posterior respuesta.\n\n
        Gracias!`,
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
  };

  return (
    <div className="fondo-conteiner">
      <div className="contact-container">
        <h1 >Contacto</h1>
        <form onSubmit={handleSubmit}>
          <div className='nombre'>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div className='email'>
            <label htmlFor="email">Correo Electrónico: </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className='mensaje'>
            <label htmlFor="message">Mensaje: </label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    
  );
};

export default Contacto;
