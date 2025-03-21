import express from 'express'
import cors from  'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'

const app=express()
const port=process.env.PORT || 3000
connectDB();
connectCloudinary();

app.use(express.json())
app.use(cors())
//end points
app.use('/api/product',productRouter);
app.use('/api/user',userRouter);
app.get('/',(req,res)=>{
     res.send("APi working")
})

app.listen(port,()=>console.log("Server started on PORT:"+ port))