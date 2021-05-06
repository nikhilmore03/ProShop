import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import ConnectDB from './config/db.js'
import productRoutes from './routes/productRoute.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

dotenv.config()

ConnectDB()

const app=express()
app.get('/',(req,res)=>{
    res.send('API is running..')
})

app.use('/api/products',productRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))

