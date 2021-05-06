import {PRODUCT_LIST_FAILED,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILED} from '../constants/productConstants'


export const productListReducers=(state={products:[]},action)=>{

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODUCT_LIST_FAILED:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const productDetailReducers=(state={product:{reviews:[]}},action)=>{

    switch(action.type){
        case PRODUCT_DETAIL_REQUEST:
            return {loading:true}
        case PRODUCT_DETAIL_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_DETAIL_FAILED:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
