const controller = {};
const connection = require('../dbConnection/connection')
const PokeModel = require('../models/pokemon.model')
controller.index = async (req,res)=>{
    try{
        const title = 'INDEX desde el SERVIDOR y con un VARIABLE';
        await connection();
        const allPokemons = await PokeModel.find();
        console.log(allPokemons)
        res.render('index', {title});
    }catch(err){console.log(err)}
    
};

module.exports = controller;
