import React, { createContext, useContext, useState, useEffect} from 'react'
import {initializeApp} from 'firebase/app'
import {getFirestore,collection, addDoc} from 'firebase/firestore'

// Aquí se debe ingresar la configuración de firebase
// const firebaseConfig = {
//     ...
// }

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const orderCollection = collection(db,"order")

const CarroContext = createContext();

export const useCarroContext = () => useContext(CarroContext);

export const CarroProvider = (props) => {

    const [cart, setCart] = useState([]);


    const addToCart = (item) => {
        const newCart = [...cart];
        const existingItemIndex = newCart.findIndex(cartItem => cartItem.id === item.id);
    
        if (existingItemIndex > -1) {
            newCart[existingItemIndex].count += item.count;
        } else {
            newCart.push(item);
        }
        setCart(newCart);
    };
    
    const orderSave = (form) => {
        const order = {
            contact: form, cart,
        }
        addDoc(orderCollection, order)
            .then(response => {
            console.log("Orden agrada a la db", response.id)
        }).catch(error => {
            console.log("Error en la carga de la db");
            console.error(error);
        })        
        setCart([]);
        window.location = "/home"
    };

    const removeFromCart = (itemId) => {
        const newCart = cart.filter(cartItem => cartItem.id !== itemId);
        setCart(newCart);
    };

    return(
        <CarroContext.Provider value={{cart, setCart,addToCart,removeFromCart,orderSave}}>
            {props.children}
        </CarroContext.Provider>
    )
}
