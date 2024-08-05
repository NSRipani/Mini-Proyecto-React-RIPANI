import './cart.css'
import Botones from "../boton/botones"
import { Link } from 'react-router-dom'
import { useCarroContext } from '../context/context'

const Cart = ({id,image,name,price, description}) => {
    const { addToCart } = useCarroContext();

    const saveProd = (count) => {
        const item = {
            id, 
            image,
            name,
            price,
            description,
            count,
        }
        
        addToCart(item);
    }

    return(
        <div className="conteiner-cart">
            <div className='img-cart'>
                <img src={image} alt={name} />
            </div>
            <h4 id='nom-title'>{name}</h4>
            <p id='precio'>$ {price.toFixed(2)}</p>
            <p id='descripcion'>{description}</p>
            <div className='detalle'>
                <Link to={`/detalle/${id}`}>
                    <button id='btn'>VER MAS</button>
                </Link>
            </div>
            <Botones saveProd={saveProd}/>
        </div>
    )
}

export default Cart
    
