// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './componentes/itemListConteiner/item.jsx'
import NavBar from './componentes/navBar/navBar.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemList consumidor={"Nicolas S. Riapni"} />
    </>
  )
}

export default App
