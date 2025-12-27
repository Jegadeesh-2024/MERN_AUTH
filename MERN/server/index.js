import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
// dotenv.config(); // MUST be first
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express()

const port = process.env.PORT || 3000
// mongodb 
connectDb()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:allowedOrigins,credentials:true}))

app.get('/',(req,res)=>res.send("Api working"))

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)


app.listen(port,()=>{
    console.log(`server started on port:${port}`);
    
})