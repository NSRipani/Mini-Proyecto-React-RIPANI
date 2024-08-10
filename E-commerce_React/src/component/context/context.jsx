import React, { createContext, useContext, useState} from 'react'
import {initializeApp} from 'firebase/app'
import {getFirestore,collection, addDoc} from 'firebase/firestore'

// Aquí se debe ingresar la configuración de firebase
// const firebaseConfig = {
//     ...
// };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const orderCollection = collection(db,"order")
const CarroContext = createContext();

export const useCarroContext = () => useContext(CarroContext);

export const CarroProvider = (props) => {

    const [card, setCard] = useState([]);
    
    // Boton 'AGREGAR AL CARRITO'
    const addToCart = (item) => {
        const newCart = [...card];
        
        const existingItemIndex = newCart.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingItemIndex > -1) {
            newCart[existingItemIndex].count += item.count;
        } else {
            newCart.push(item);
        }
        setCard(newCart);
    };

    const orderSave = (form) => {
        const order = {
            contact: form, card,
        }
        addDoc(orderCollection, order)
            .then(response => {
            console.log("Orden agreda a la db", response)
            setCard([]);
            window.location = '/home'
        }).catch(error => {
            console.log("Error en la carga de la db", error);
        },(5000))        
    };

    const removeFromCart = (itemId) => {
        const newCart = card.filter(cartItem => cartItem.id !== itemId);
        setCard(newCart);
    };

    return(
        <CarroContext.Provider value={{card, setCard,addToCart,removeFromCart,orderSave}}>
            {props.children}
        </CarroContext.Provider>
    )
}

