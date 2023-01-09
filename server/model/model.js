import db from '../config/dbConfig.js'

export const testDb=(result)=>{
    if(db){
        console.log()
        result(null,"successfully connected db")
    }else{
        result(err,null)
    }
}