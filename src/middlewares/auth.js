const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

exports.checkAuth = (req,res,next)=>{
    const authHeader = req.get("authorization")

    if (!authHeader){
        return res.status(401).send({
            message: "No authorization",
            statusCode: 401
        })
    }

    const token = authHeader.split(" ")[1];
    console.log(token)
    if (!token){
        return res.status(401).send({
            message: "token error!"
        })
    }

    try{
        jwt.verify(token, SECRET, (err)=>{
            if (err){
                return res.status(401).send({
                    message: "Acesso não autorizado"
                })
            }
            next();
        })
    }catch{
        console.error(err)
    }
}