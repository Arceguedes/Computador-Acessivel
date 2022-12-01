const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET;

const createUser = async (req,res)=>{

};

const login = async(req,res)=>{

};

module.exports = {
    createUser,
    login
}