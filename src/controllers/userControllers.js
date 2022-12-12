const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET;

const createUser = async (req,res)=>{
    const emailExists = await userSchema.exists({email:req.body.email});
    if(emailExists){
        return res.status(409).send({
            message: "Email já cadastrado"
        })
    }

    const hashedPassword = bcrypt.hashSync(req.body.password,10);
    req.body.password= hashedPassword;

    try{
        const newUser = new userSchema(req.body);
        const savedUser = await newUser.save();

        res.status(201).send({
            message: "Usuário criado com sucesso"
        })
    }catch(err){
        console.error(err)
        res.status(500).send({
            message: err.message
        })
    }
};

const login = async(req,res)=>{
    try{
        userSchema.findOne({email: req.body.email}, (error,user)=>{
            if (!user){
                return res.status(404).send({
                    message: "Usuário não encontrado"
                })
            };
        
            const validPassword = bcrypt.compareSync(req.body.password,user.password);
    
            if (!validPassword){
                return res.status(401).send({
                    message: "Senha inválida"
                })
            }
    
            const token = jwt.sign({name:user.name},SECRET);
    
            res.status(200).send({
                message: "Guarde seu token:",
                token
            })
    })
    }catch(err){
        console.error(err)
        res.status(500).send({
            message: err.message
        })
    }
};

module.exports = {
    createUser,
    login
}