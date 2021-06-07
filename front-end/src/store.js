import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productDetailReducers, productListReducers} from './reducers/productReducers'
import { cartReducer} from './reducers/cartReducers'
import {updateUserProfileReducers, userDetailsReducers, userLoginReducers, userRegisterReducers} from './reducers/userReducers'


const reducer=combineReducers({
    productList:productListReducers,
    productDetails:productDetailReducers,
    cartDetails:cartReducer,
    userLogin:userLoginReducers,
    userSignUp:userRegisterReducers,
    userDetails:userDetailsReducers,
    userUpdateProfile:updateUserProfileReducers,
})


const cartItemsFromStorage=localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage=localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressFromStorage=localStorage.getItem('shippingAddress')?
JSON.parse(localStorage.getItem('shippingAddress')):{}

const initialState={
    cartDetails:{cartItems:cartItemsFromStorage,shippingAddress:shippingAddressFromStorage},
    userLogin:{userInfo:userInfoFromStorage},

}


const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store