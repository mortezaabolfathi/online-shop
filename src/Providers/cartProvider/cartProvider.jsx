import React, { useContext, useReducer } from 'react';
import CartReducer from "./cartReducer";

const CartContext=React.createContext();
const CartContextDispatcher=React.createContext();

const initialState={
    cart:[],
    total:0
}
console.log(initialState.total)

const CartProvider = ({children}) => {

    const [cart,dispatch]=useReducer(CartReducer,initialState);

    return ( 
        <CartContext.Provider value={cart}>
            <CartContextDispatcher.Provider value={dispatch}>

                {children}

            </CartContextDispatcher.Provider>
        </CartContext.Provider>
     );
}
 
export default CartProvider;

export const useCart=()=>useContext(CartContext);
export const useCartActionS=()=> useContext(CartContextDispatcher);