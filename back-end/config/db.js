import mongoose from 'mongoose'
import colors from 'colors'

const ConnectDB= async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_CONN,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })

        console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline)
    }
    catch(error){
        console.error(`Error : ${error.message}`.red.underline.bold)
    }
}

export default ConnectDB