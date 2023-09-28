const express=require('express');
const server=express();
const Artigos=require('./src/data/Artigos.json');

server.get('/Artigo-Api',(req,res) =>{

    return res.json(Artigos)
})

server.listen(3000, () =>{
console.log('Server funcionou')

});