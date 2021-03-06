import React ,{useState,useEffect}from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import {Loader} from '../components/Loader'
import {getUserDetails,updateUserProfile} from '../actions/userAction'

const ProfileScreen = ({location,history}) => {
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState(null)



    const dispatch=useDispatch()

    const userDetails=useSelector(state=>state.userDetails)
    const {loading,error,user}=userDetails

    const userUpdateProfile=useSelector(state=>state.userUpdateProfile)
    const {success}=userUpdateProfile
    console.log(success)
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin
    
    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }
        else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }
   },[history,userInfo,dispatch,user])


   const submitHandler=(e)=>{
       e.preventDefault()
       if(password!==confirmPassword){
           setMessage('Password do not match')
       }else{
       //Dispatch Login
       dispatch(updateUserProfile({id:user._id,name,email,password}))
       }
   }

    return <Row>
        <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>User details updated</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='name'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmpassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
                Update
            </Button>
        </Form>
        </Col>
        <Col md={9}>
            <h2>My Orders</h2>
        </Col>
    </Row>

}

export default ProfileScreen
