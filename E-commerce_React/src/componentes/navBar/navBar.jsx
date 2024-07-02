import Carro from "../cardCompras/iconoCart"

const NavBar = () => {
    return (
        <nav>
            <h1>TITULO DEL E-COMMERCE</h1>
            <div>
                <ul>
                    <li>
                        <a href="#">ENLACE 1</a>
                    </li>
                    <li>
                        <a href="#">ENLACE 2</a>
                    </li>
                    <li>
                        <a href="#">ENLACE 3</a>
                    </li> 
                </ul>
            </div>
            <Carro />
        </nav>
    )
}
export default NavBar