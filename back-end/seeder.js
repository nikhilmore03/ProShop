import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'    
import ConnectDB from './config/db.js'


dotenv.config()
ConnectDB()

const importData=async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany() 
        await User.deleteMany() 

        const createdUsers=await User.insertMany(users)

        const adminUsers=createdUsers[0]._id
        console.log(adminUsers)
        const sampleProducts=products.map(product=>{
            return {...product,user:adminUsers}
        })
        console.log(sampleProducts)
        
        await Product.insertMany(sampleProducts)

        console.log("Data imported".green.inverse)
        process.exit()
    }
    catch(error){

        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData=async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany() 
        await User.deleteMany() 

        console.log("Data Destoyed".green.inverse)
        process.exit()
    }
    catch(error){

        console.error(`${error.message}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[0]==='-d'){
    destroyData()
}
else{
    importData()
}