import { Children, createContext, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(
        [
            {id: 1, title: 'shirt', price: 300, quantity: 1,img: 'url',},
        ]
    )


    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}