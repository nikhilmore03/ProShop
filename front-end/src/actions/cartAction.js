import axios from 'axios'
import {ADD_TO_CART,REMOVE_FROM_CART,SAVE_PAYMENT_METHOD,SAVE_SHIPPING_ADDRESS}  from '../constants/cartConstant'

export const AddtoCart=(id,qty)=>async(dispatch,getState)=>{
    const {data}=await axios.get(`/api/products/${id}`)

    dispatch({
        type:ADD_TO_CART,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStocks:data.countInStocks,
            qty:qty    
        }
    })


    localStorage.setItem('cartItems',JSON.stringify(getState().cartDetails.cartItems))

}

export const RemoveFromCart=(id)=>(dispatch,getState)=>{
  
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cartDetails.cartItems))

}

export const saveShippingAddress=(data)=>(dispatch)=>{
  
    dispatch({
        type:SAVE_SHIPPING_ADDRESS,
        payload:data
    })

    localStorage.setItem('shippingAddress',JSON.stringify(data))

} 

export const savePaymentMethod=(data)=>(dispatch)=>{
  
    dispatch({
        type:SAVE_PAYMENT_METHOD,
        payload:data
    })

    localStorage.setItem('paymentMethod',JSON.stringify(data))

} 