import React ,{useState}from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckOutSteps from '../components/CheckOutSteps'

import {savePaymentMethod} from '../actions/cartAction'
 
const PaymentScreen = ({history}) => {

    const cartDetails=useSelector(state=>state.cartDetails)
    const {shippingAddress}=cartDetails

    if(!shippingAddress){
        history.push('/shipping')
    }
    console.log(shippingAddress)
    const [paymentmethod,setPaymentMethod]=useState('Test')


    const dispatch=useDispatch()

   const submitHandler=(e)=>{
        e.preventDefault()

        console.log(paymentmethod)
        dispatch(savePaymentMethod(paymentmethod))
        history.push('/placeorder')
    }

    return <FormContainer>
        <CheckOutSteps step1 step2 step3></CheckOutSteps>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
                <Form.Check type='radio' 
                label='PayPal or Credit Card' 
                id='PayPal' 
                name='paymentMethod' 
                value='PayPal'
                checked
                onChange={(e)=>setPaymentMethod(e.target.value)}
                >
                </Form.Check>
                <Form.Check type='radio' 
                label='Stripe' 
                id='Stripe' 
                name='paymentMethod' 
                value='Stripe'
                //checked
                onChange={(e)=>setPaymentMethod(e.target.value)}
                >
                </Form.Check>
            </Col>
            </Form.Group>
        <Button type='submit' variant='primary'>
            Continue
        </Button>
        </Form>
    </FormContainer>
}
 
export default PaymentScreen
