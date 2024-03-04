import EventoDAO from "../Persistencia/EventoDAO.js";

export default class Evento {
    //atributos
    #codigo;
    #nome;
    #horario;
    #dia;
    #localizacao;
    #duracao;
    #classificacao;
    #preco;
    #ingressos;

    construtor(codigo=0, nome="", horario="", dia="", localizacao="", duracao="", classificacao="", preco="", ingressos="") {
        this.#codigo = codigo;
        this.#nome = nome;
        this.#horario = horario;
        this.#dia = dia;
        this.#localizacao = localizacao;
        this.#duracao = duracao;
        this.#classificacao = classificacao;
        this.#preco = preco;
        this.#ingressos = ingressos;
    }

    //gets e sets
    get nome( ) {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get codigo( ) {
        return this.#codigo;
    }

    set codigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    get horario( ) {
        return this.#horario;
    }

    set horario(novoHorario) {
        this.#horario = novoHorario;
    }

    get dia( ) {
        return this.#dia;
    }

    set dia(novoDia) {
        this.#dia = novoDia;
    }

    get localizacao( ) {
        return this.#localizacao;
    }

    set localizacao(novoLocalizacao) {
        this.#localizacao = novoLocalizacao;
    }

    get duracao( ) {
        return this.#duracao;
    }

    set duracao(novoDuracao) {
        this.#duracao = novoDuracao;
    }

    get classificacao( ) {
        return this.#classificacao;
    }

    set classificacao(novoClassificacao) {
        this.#classificacao = novoClassificacao;
    }

    get preco( ) {
        return this.#preco;
    }

    set preco(novoPreco) {
        this.#preco = novoPreco;
    }

    get ingressos( ) {
        return this.#ingressos;
    }

    set ingressos(novoIngressos) {
        this.#ingressos = novoIngressos;
    }

    //métodos
    async gravar( ) {
        const dao = new EventoDAO( );
        await dao.gravar(this);
    }

    async atualizar( ) {
        const dao = new EventoDAO( );
        await dao.atualizar(this);
    }

    async excluir( ) {
        const dao = new EventoDAO( );
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa) {
        const dao = new EventoDAO( );
        return await dao.consultar(termoDePesquisa);
    }

    toString( ) {
        return `Evento código: ${this.codigo} - nome: ${this.nome}`
    }
}