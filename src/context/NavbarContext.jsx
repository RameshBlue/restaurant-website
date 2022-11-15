import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const NavbarContext = createContext();

function NavbarProvider({children}) {
    
    const [navbarLinkIndex, SetNavbarLinkIndex] = useState(0);
    const [cartItems, SetCartItems] = useState([])

    useEffect(()=>{

        if (localStorage.getItem('navLinkIndex')) {
            SetNavbarLinkIndex(JSON.parse(localStorage.getItem('navLinkIndex')))
        }

         if (localStorage.getItem('cartItems')) {
            SetCartItems(JSON.parse(localStorage.getItem('cartItems')))
        }

    },[])

    const setNavbarLinkIndex = (index)=>{
        SetNavbarLinkIndex(index);
        localStorage.setItem('navLinkIndex',JSON.stringify(index));
    }

    const setCartItems = (items)=>{
        SetCartItems(items);
        localStorage.setItem('cartItems',JSON.stringify(items));
    }

    const AddCartItem = (item)=>{
        if (cartItems.length >0) {
            
            const arr = [...cartItems];
            const index = arr.findIndex((eachItem)=> { return eachItem.name === item.name});

            if (index !== -1) {
                arr[index].quantity += item.quantity;
                setCartItems(arr);
            }else{
                setCartItems([...cartItems,item]);
            }
        }else{
            setCartItems([...cartItems,item]);
        }
    }

    const SetExistingItemQuantity = (item)=>{
        
        const arr = [...cartItems];
        const index = arr.findIndex((eachItem)=> { return eachItem.name === item.name});
        if (index !== -1) {
            arr[index].quantity = item.quantity;
            setCartItems(arr);
        }
    }

    const RemoveCartItem = (itemName)=>{
        if (cartItems.length>0) {
            const arr = cartItems;
            const newArr = arr.filter((item)=>{
                return item.name !== itemName;
            })
            setCartItems(newArr);
        }
    }

    const GetTotalQuantityInCart = ()=>{
        let total = 0;
        cartItems.forEach((item)=>{
            total += item.quantity;
        })
        return total;
    }

    const GetTotalPriceInCart = ()=>{
        let total = 0;
        cartItems.forEach((item)=>{
            total += (item.price * item.quantity);
        })
        return total.toFixed(2);
    }
  return (
    <NavbarContext.Provider value={{navbarLinkIndex, setNavbarLinkIndex, cartItems, AddCartItem, RemoveCartItem, SetExistingItemQuantity,  GetTotalQuantityInCart, GetTotalPriceInCart}}>
        {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider