const hardwareSchema = require("../models/hardwareSchema");

const registerItens = async (req,res)=>{
    try{
        const newItem = new hardwareSchema(req.body);
        const savedItem = await newItem.save();

        res.status(201).send({
            message: "Item cadastrado com sucesso"
        })
    }catch(err){
        console.error(err)
        res.status(500).send({
            message: err.message
        })
    }
};

const editItens = async(req,res)=>{

};

const showItens = async(req,res)=>{
    const allHardware = await hardwareSchema.find()
    res.status(200).send(allHardware)
}

const selectItens = async(req,res)=>{

}

const requestPc = async(req,res)=>{

}

module.exports = {
    registerItens,
    editItens,
    showItens,
    selectItens,
    requestPc
}