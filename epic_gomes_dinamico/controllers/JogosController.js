const Jogos = require('../models/jogos')

module.exports = {
    async index(req, res) {

        const jogos = await Jogos.findAll();

        if (jogos == "" || jogos == null){
            return res.status(200).send({ message: "Nenhum usuário cadastrado"});
        }

        return res.status(200).send({ jogos });
    },
    async store(req, res) {

    },
    async update(req, res) {

    },
    async delete(req, res) {

    }
}