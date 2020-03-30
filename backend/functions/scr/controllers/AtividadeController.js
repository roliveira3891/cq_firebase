
const database = require('../database/connection');

module.exports = {
    
    async create (request, response){

        const dados = {} = request.body;
        
        var matricula = dados.matsupervisor;
        var id = dados.id;
        try{
            database.ref('messages/' + matricula + '/' + id).set(dados);
        }catch(err){
            return response.json({error:'Erro ao Inserir'});
        }    
        return response.json({id});
    },

    async home (request, response){
        return response.send('dados do controller teste');
    }
}