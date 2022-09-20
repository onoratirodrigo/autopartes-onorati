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
        }
    }

    const removeItem = (itemId)=>{
        // const itemEliminado = cart.map((i, index)=>{
        //     if(i.id === itemId){
        //         cart.splice(index, 1)
        //     }
        // })
        const itemEliminado = cart.filter((item)=> item.id !== itemId )
        setCart(itemEliminado)
        //lo puedo hacer con fiulter tambien usando el !== con el id que deseo borrar
    }

    const clearCart = ()=>{
        setCart([])
    }

    const getTotalPrice = ()=>{

        var totalPrice = 0
        cart.map((item)=> totalPrice += item.price * item.cant)

        return totalPrice

    }

    const getTotalCantidades = ()=>{

        var totalCantidades = 0
        cart.map((item) => totalCantidades += item.cant)

        return totalCantidades

    }

    const isInCart = (id)=>{
        const existe = cart.some(item => item.id === id)
        return existe
    }

    //estados
    //funciones 
    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart, getTotalPrice, getTotalCantidades}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

