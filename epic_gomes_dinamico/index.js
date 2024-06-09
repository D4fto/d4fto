
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    host: "localhost",
    username: 'root',
    password: '464369',
    database: 'pedro_henrique_tunes_degasperi_loja_de_jogos',
    dialect: 'mysql',
    dialectModule: require("mysql2"),
    benchmark:true
    
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})