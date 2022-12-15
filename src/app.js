require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./config/database");
const userRoutes = require("./routes/userRoutes")
const hardwareRoutes = require("./routes/hardwareRoutes")

db.connect();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=> res.status(200).send({
    "Sobre o projeto": "O objetivo do app “computador acessível” é unir três tipos de pessoas: Uma ou mais com conhecimento de montagem de computadores. Dois: pessoas com computadores velhos ou quebrados que queiram doar seus hardwares. E por fim três, pessoas de baixa renda que precisam de um computador.",
    "Informações adicionais": "Este app não tenta substituir uma ONG gratuita, e possui custos de logística para fazer com que o projeto continue, que devem ser pagas pela pessoa beneficiária.",
    "Como acessar as rotas": "Todas as informações sobre rotas estão disponíveis no about-me deste projeto: https://github.com/Arceguedes/Computador-Acessivel"
}))

app.use("/users", userRoutes);
app.use("/hardware", hardwareRoutes);

module.exports = app;