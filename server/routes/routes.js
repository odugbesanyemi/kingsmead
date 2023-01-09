import express from 'express'
import {loginCtrl} from '../controller/controller.js'
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('welcomeo again')
})

router.post('/login',loginCtrl)

export default router
