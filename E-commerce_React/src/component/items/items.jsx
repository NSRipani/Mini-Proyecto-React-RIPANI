import Card from "../tarjeta/card"
import './items.css'

const Items = ({productos}) =>{

    return(
        <div className="lista-productos">
            {productos.map(prod => (
                <Card key={prod.id} {...prod}/>
            ))}
        </div>
    )}
export default Items