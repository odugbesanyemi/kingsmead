import express from 'express'
import {loginCtrl} from '../controller/controller.js'
import { tokenAuth } from '../middlware/middleware.js'
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('welcomeo again')
})
router.get('/isloggedin',tokenAuth)

router.post('/login',loginCtrl)

export default router
