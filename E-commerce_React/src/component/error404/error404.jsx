import React from 'react'
import './error404.css'

const Error404 = () => {
    return (
      <div className='container'>
          <img id='err404' src='./src/assets/error404.png' alt='error404'/>
          <p className='parrafo'>!Lo sentimos, la página que buscas no fue encontrada.¡</p>
      </div>
    )
}

export default Error404
