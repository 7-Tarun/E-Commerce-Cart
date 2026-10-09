import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(
        [
            {id: 1, title: 'shirt', price: 300, quantity: 1,image: 'url',},
        ]
    )

    const addToCart = () => {
        
    }

    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);

    if(!context){
        throw new Error('useCart must be used within a CartProvider');
    }

    return context;
}