import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

//crear componente que devuelva el cartcontext.provider

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addToCart = (item, cant)=>{
        if(!isInCart(item.id)){
            setCart([...cart,{...item, cant}])
        }else{
            cart.map((obj)=>{

                if(obj.id === item.id){
                    obj.cant = cant
                }

            })
            console.log(cart);
        }
    }

    const removeItem = (itemId)=>{
        const itemEliminado = cart.map((i, index)=>{
            if(i.id === itemId){
                cart.splice(index, 1)
            }
        })
        setCart(itemEliminado)
        console.log(cart)
        //lo puedo hacer con fiulter tambien usando el !== con el id que deseo borrar
    }

    const clearCart = ()=>{
        setCart([])
        console.log(cart)
    }

    const isInCart = (id)=>{
        const existe = cart.some(item => item.id === id)
        return existe
    }

    //estados
    //funciones 
    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

