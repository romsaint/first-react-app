const jwt = require('jsonwebtoken')

async function verifyToken(req, res, next){
    const tokenWithBearer = req.headers.authorization

    if(!tokenWithBearer){
        return res.json({message: 'PLease auth!'})
    }
    if(!tokenWithBearer.startsWith('Bearer ')){
        return res.json({message: 'PLease auth!'})
    }

    const token = tokenWithBearer.slice(7, tokenWithBearer.length)

    await jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if(err) {
            console.log(err.message)
            return new Error(err.message)
        }
        req.user =  decoded.name
        next()
    })
}

module.exports = {verifyToken}