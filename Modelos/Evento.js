export default class Evento {
    //atributos
    #nome
    #codigo
    #horario
    #data
    #local
    #duracao
    #classificacao
    #preco
    #ingressos

    construtor(nome = "", codigo = "", horario = "", data = "", local = "", duracao = "", classificacao = "", preco = "", ingressos = "") {
        this.#nome = nome;
        this.#codigo = codigo;
        this.#horario = horario;
        this.#data = data;
        this.#local = local;
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

    get data( ) {
        return this.#data;
    }

    set data(novoData) {
        this.#data = novoData;
    }

    get local( ) {
        return this.#local;
    }

    set local(novoLocal) {
        this.#local = novoLocal;
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
    gravar( ) {

    }

    atualizar( ) {
        
    }

    excluir( ) {
        
    }

    consultar(termo) {
        
    }
}