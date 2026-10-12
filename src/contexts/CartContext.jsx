import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        // Check karo item pehle se hai ya nahi
        const existingItem = cart.find(item => item.id === product.id);

        // Agar hai, toh map se uski quantity +1 kar do
        if(existingItem){
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item));
        }
        else{
            // Agar nahi hai, toh naya object push karo quantity 1 ke sath
            setCart([...cart,{...product, quantity: 1}])
            console.log(cart);
        }
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"))

        if(cart && cart.length > 0){
            setCart(cart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const removeCart = (productID) => {
        const userConfirmed = window.confirm("Remove Item From Cart?");
        if(!userConfirmed) {
            return;
        }
        //filter is immutable it does not change the original array instead it returns a brand-new array.
        const updateCart = cart.filter(item => item.id !== productID);
        setCart(updateCart);
    }

    const decreaseQuantity = (productID) => {

        const existingItem = cart.find(item => item.id === productID);

        if(existingItem.quantity === 1){
            removeCart(productID);
        }
        else{
            setCart(cart.map(item => item.id === productID ? {...item, quantity: item.quantity - 1} : item));
        }
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, removeCart, decreaseQuantity}}>
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