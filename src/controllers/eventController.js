const eventSchema = require("../models/eventSchema");

const registerItens = async (req,res)=>{
    try{
        const newItem = new eventSchema(req.body);
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

const deleteItens = async(req,res)=>{

    const {id} = req.params
    try{
        const findItem = await eventSchema.findById(id);

        if (!findItem) return res.status(404).json({
            statusCode: 404,
            message: "Item not Found"
        });
    
        await findItem.delete()
        return res.status(200).json({
            statusCode: 200,
            message: `Item deleted`
        })
    }catch(err){
        res.status(500).json({
            statusCode: 500,
            message: error.message
            })
    }
    
};

const showItens = async(req,res)=>{
    const allItems = await eventSchema.find()
    res.status(200).send(allItems)
}

const requestPc = async(req, res)=>{
    const processador = await eventSchema.exists({ category: "processador" });

    if (true) {
        return res.status(409).send({
            message: "Computador disponível em nossa base de dados!"
        });
    }
}

module.exports = {
    registerItens,
    deleteItens,
    showItens,
    requestPc
}