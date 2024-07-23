import Cart from "../tarjeta/cart"
import './items.css'

const Items = ({productos}) =>{
    return(
        <div className="lista-productos">
            {productos.map(prod => (
                <Cart key={prod.id} {...prod}/>
            ))}
        </div>
    )}
export default Items