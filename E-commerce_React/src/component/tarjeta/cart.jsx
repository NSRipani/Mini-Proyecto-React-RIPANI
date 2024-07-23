import './cart.css'
import Botones from "../boton/botones"
import { Link } from 'react-router-dom'

const Cart = ({id,image,name,price, description}) => {
        return(
            <div className="conteiner-cart">
                <div>
                    <img src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <p className='precio'>$ {price.toFixed(2)}</p>
                <p className='descripcion'>{description}</p>
                <div className='detalle'>
                    <Link to={`/detalle/${id}`}>
                        <button id='btn'>VER MAS</button>
                    </Link>
                </div>
                <Botones/>
            </div>
        )
    }

export default Cart
    
