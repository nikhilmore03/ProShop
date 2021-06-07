import React ,{useState}from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'

import {saveShippingAddress} from '../actions/cartAction'
 
const ShippingScreen = ({history}) => {

    const cartDetails=useSelector(state=>state.cartDetails)
    const {shippingAddress}=cartDetails
    console.log(shippingAddress)
    const [address,setAddress]=useState(shippingAddress.address)
    const [city,setCity]=useState(shippingAddress.city)
    const [postalcode,setPostalcode]=useState(shippingAddress.postalcode)
    const [country,setCountry]=useState(shippingAddress.country)

    const dispatch=useDispatch()

   const submitHandler=(e)=>{
        e.preventDefault()
        console.log('submit')
        dispatch(saveShippingAddress({address,city,postalcode,country}))
        history.push('/payment')
    }

    return <FormContainer>
        <h1>Shipping</h1>
        <CheckOutSteps step1 step2></CheckOutSteps>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Address'
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter City'
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='postalcode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Postal Code'
                    value={postalcode}
                    onChange={(e)=>setPostalcode(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='Enter Country'
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                ></Form.Control>
            </Form.Group>
        <Button type='submit' variant='primary'>
            Continue
        </Button>
        </Form>
    </FormContainer>
}
 
export default ShippingScreen
