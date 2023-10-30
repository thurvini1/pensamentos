// importando o model thought

const Thought = require("../model/Thought");

module.exports = {

    async dashboard(request, response){
        const thoughts = await Thought.findAll({ raw: true});
        return response.render("thoughts/dashboard", { thoughts });
    },

    async registerThought(request, response){
        return response.render("thoughts/register");
    },

    // Função responsável por buscar todos o pensamentos cadastrados.
    async createThought(request, response) {
        const { title, description } = request.body

        const thought = await Thought.create({title, description});

        create({title, description});
    },
}