import axios from 'axios'
import {PRODUCT_LIST_FAILED,PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,PRODUCT_DETAIL_FAILED,
    PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_REQUEST} from '../constants/productConstants'


export const listProducts=()=>async(dispatch)=>{

    try{
        dispatch({type:PRODUCT_LIST_REQUEST})

        const {data}=await axios.get('/api/products')

        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_LIST_FAILED,
            payload:error.response && error.response.data ? 
            error.response.data.message:error.message
        })
    }
}

export const detailProducts=(id)=>async(dispatch)=>{

    try{
        dispatch({type:PRODUCT_DETAIL_REQUEST})

        const {data}=await axios.get(`/api/products/${id}`)

        dispatch({
            type:PRODUCT_DETAIL_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_DETAIL_FAILED,
            payload:error.response && error.response.data ? 
            error.response.data.message:error.message
        })
    }
}