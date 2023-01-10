import jwt from 'jsonwebtoken'

export const tokenAuth = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401) 
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err) {return res.status(403).send(err)}
        else{
            res.status(200).send(req.user = user)
         }
        next();
    })
}