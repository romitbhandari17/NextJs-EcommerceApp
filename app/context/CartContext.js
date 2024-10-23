'use client'; // Since we're using state and effect

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    
    console.log("use effect inside cart context");
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
        setSubTotal(parseFloat(localStorage.getItem("subTotal")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, [])
  

  const saveCart = (newCart)=> {
    localStorage.setItem("cart" , JSON.stringify(newCart))
    
    let subt=0;
    let keys = Object.keys(newCart);
    for(let i=0; i<keys.length; i++){
        subt += newCart[keys[i]].qty*newCart[keys[i]].price;
    }

    setSubTotal(subt);
    localStorage.setItem("subTotal" , subt)
  }

  const removeFromCart =(itemCode, qty, name, price, size, variant)=>{
    let newCart = cart;
    
    console.log('cart in remove', newCart)
    if(itemCode in newCart){
      newCart[itemCode].qty = newCart[itemCode].qty-qty;

      if(newCart[itemCode].qty <= 0){
        delete newCart[itemCode]
      }
    }

    console.log('cart in remove 2', newCart)

    setCart(newCart);
    saveCart(newCart);
  }

  const addToCart = (itemCode, qty, price, name, size, variant)=>{
    let newCart = cart;
    
    console.log('cart in Add=',newCart);
    if(itemCode in newCart){
      newCart[itemCode].qty = newCart[itemCode].qty+qty;
    }else{
      newCart[itemCode] = {qty, price, name, size, variant}
    }

    console.log('cart in Add 2=',newCart);
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = ()=>{
    setCart({});
    saveCart({});
  }

  return (
    <CartContext.Provider value={{ cart, subTotal, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );

}

export const useCart = () => useContext(CartContext);