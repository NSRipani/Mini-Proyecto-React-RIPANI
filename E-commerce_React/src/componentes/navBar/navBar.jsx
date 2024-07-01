import Carro from "../cardCompras/iconoCart"

const NavBar = () => {
    return (
        <nav className="navbar-conteiner">
            <h1 className="navbar__title">TITULO DEL E-COMMERCE</h1>
            <div className="navbar__links">
                <a href="">ENLACE 1</a>
                <a href="">ENLACE 2</a>
                <a href="">ENLACE 3</a>
            </div>
            <Carro />
        </nav>
    )
}
export default NavBar