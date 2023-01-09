import dotenv from "dotenv"
dotenv.config()
import express from "express"
import router from './routes/routes.js'
import cors from 'cors'
const app = express()
const port = process.env.APP_PORT
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(port,()=>{
    console.log(`app started on port ${port}`)
})