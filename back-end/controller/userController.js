import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generatetoken from '../utils/generateToken.js'


//@desc   Check user details
//@route  Post api/users/login
//access  Private 
const authUser=asyncHandler(async(req,res)=>{
    
    const {email,password}=req.body

    const user=await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generatetoken(user._id)  
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//@desc   Check user details
//@route  Post api/users/login
//access  Private 
const registerUser=asyncHandler(async(req,res)=>{
    
    const {name,email,password}=req.body

    const userExists=await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User is already exists')
    }

    const user=await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generatetoken(user._id)  
        })

    }
    else{
        res.status(404)
        throw new Error('User not found')
    }

})



//@desc   Check user details
//@route  Post api/users/login
//access  Private 
const getUserProfile=asyncHandler(async(req,res)=>{
    //res.send("Success")   
    const user=await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generatetoken(user._id)  
        })

    }else{
        res.status(404)
        throw new Error('User not found')
    }
   
})

//@desc   Update user details
//@route  Put api/users/login
//access  Private 
const updateUserProfile=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id)
    if(user){
     user.name=req.body.name || user.name
    user.email=req.body.email || user.email

    if(req.body.password){
        user.password=req.body.password
    }

    const updatedUser=await user.save()

    res.json({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin:updatedUser.isAdmin,
        token:generatetoken(updatedUser._id)  
    })
 
 }else{
        res.status(404)
        throw new Error('User not found')
    }
   
})

export {authUser,getUserProfile,registerUser,updateUserProfile}