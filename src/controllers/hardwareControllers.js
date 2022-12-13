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
    const processador = await hardwareSchema.exists({ category: "processador"});
    const moboExists = await hardwareSchema.exists({ category: "placa-mãe"});
    const ramExists = await hardwareSchema.exists({ category: "RAM"});
    const armazenamento = await hardwareSchema.exists({ category: "armazenamento"});
    const fonte = await hardwareSchema.exists({ category: "fonte"});
    const gabinete = await hardwareSchema.exists({ category: "gabinete"});
    const monitor = await hardwareSchema.exists({ category: "monitor"});

    if (processador, moboExists, ramExists,armazenamento, fonte,gabinete,monitor){
        return res.status(409).send({
            message: "Computador disponível em nossa base de dados!"
        })
    }else{
        return res.status(409).send({
            message: "Não há computadores disponiveis em nossa base de dados!"
        })
    }
}

module.exports = {
    registerItens,
    editItens,
    showItens,
    selectItens,
    requestPc
}