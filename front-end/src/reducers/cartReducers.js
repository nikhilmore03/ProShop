import {ADD_TO_CART,REMOVE_FROM_CART, SAVE_PAYMENT_METHOD, SAVE_SHIPPING_ADDRESS} from '../constants/cartConstant'

export const cartReducer=(state={cartItems:[],shippingAddress:{}},action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item=action.payload;
            const existItem=state.cartItems.find(x=>x.product===item.product)
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.map(x=>x.product===existItem.product?item:x)
                }
            }
            else{
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
        
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(x=>x.product !== action.payload)
            }
        case SAVE_SHIPPING_ADDRESS:
            return{
                ...state,
                shippingAddress:action.payload
            } 
        case SAVE_PAYMENT_METHOD:
            return{
                ...state,
                paymentMethod:action.payload
            } 
        default:
            return state
    }
}
 
