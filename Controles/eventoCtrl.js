import Evento from "../Modelos/Evento.js"
import EventoDAO from "../Persistencia/EventoDAO.js"

export default class EventoCtrl {
    //esta classe traduz pedidos HTTP em comandos internos da aplicação
    //requisiçoes HTTP (GET, POST, PUT ou PATCH, DELETE)

//gravar é trazer dados no formato JSON, enviando uma requisiçao do tipo POST
    gravar(requisicao, resposta) {
        resposta.type('application/json')
        if(requisicao.method === "POST" && requisicao.is('application/json')) {
            //extrai dados do corpo da req
            const dados = requisicao.body
            const nome = dados.nome
            const horario = dados.horario
            const dia = dados.dia
            const localizacao = dados.localizacao
            const duracao = dados.duracao
            const classificacao = dados.classificacao
            const preco = dados.preco
            const ingressos = dados.ingressos
            
            if (nome && horario && dia && localizacao && duracao && classificacao && preco && ingressos) {
                const evento = new Evento (0, nome, horario, dia, localizacao, duracao, classificacao, preco, ingressos)
                evento.gravar( ).then(( ) => {
                    resposta.status(201)
                    resposta.json({
                        "status": true,
                        "mensagem": "Evento gravado com sucesso!",
                        "codigo_evento": evento.codigo
                    })
                })
                .catch((erro) => {
                    resposta.status(500)
                    resposta.json({
                        "status": false,
                        "mensagem": "Não foi possível armazenar o evento!" + erro.message
                    })
                })
            }
            else {
                resposta.status(400)
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do evento, conforme informações da API."
                })
            }
        }
        else {
            resposta.status(405)
            resposta.json({
                "status": false,
                "mensagem": "Por favor, utilize uma requisição POST para gravar novos eventos."
            })
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json')
        if(requisicao.method === "PATCH" || requisicao.method === "PUT" && requisicao.is('application/json')) {
            //extrai dados do corpo da req
            const dados = requisicao.body
            //codigo extraido da URL, ex: http://localhost:3000/cliente/1 - 1 = codigo
            const codigo = requisicao.params.codigo
            const nome = dados.nome
            const horario = dados.horario
            const dia = dados.dia
            const localizacao = dados.localizacao
            const duracao = dados.duracao
            const classificacao = dados.classificacao
            const preco = dados.preco
            const ingressos = dados.ingressos
            if (codigo && codigo > 0 && nome && horario && dia && localizacao && duracao && classificacao && preco && ingressos) {
                const evento = new Evento (codigo, nome, horario, dia, localizacao, duracao, classificacao, preco, ingressos)
                evento.atualizar( ).then(( ) => {
                    resposta.status(201)
                    resposta.json({
                        "status": true,
                        "mensagem": "Evento atualizado com sucesso!",
                        "codigo_evento": evento.codigo
                    })
                })
                .catch((erro) => {
                    resposta.status(500)
                    resposta.json({
                        "status": false,
                        "mensagem": "Não foi possível atualizar o evento!" + erro.message
                    })
                })
            }
            else {
                resposta.status(400)
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do evento, conforme informações da API."
                })
            }
        }
        else {
            resposta.status(405)
            resposta.json({
                "status": false,
                "mensagem": "Por favor, utilize uma requisição PATCH ou PUT para atualizar eventos."
            })
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json')
        if(requisicao.method === "DELETE" && requisicao.is('application/json')) {
            const codigo = requisicao.params.codigo
            if (codigo && codigo > 0) {
                const evento = new Evento (codigo)
                evento.excluir( ).then(( ) => {
                    resposta.status(200)
                    resposta.json({
                        "status": true,
                        "mensagem": "Evento excluído com sucesso!",
                        "codigo_evento": evento.codigo
                    })
                })
                .catch((erro) => {
                    resposta.status(500)
                    resposta.json({
                        "status": false,
                        "mensagem": "Não foi possível excluir o evento!" + erro.message
                    })
                })
            }
            else {
                resposta.status(400)
                resposta.json({
                    "status": false,
                    "mensagem": "Por favor, informe o código do evento que deseja excluir, conforme informações da API."
                })
            }
        }
        else {
            resposta.status(405)
            resposta.json({
                "status": false,
                "mensagem": "Por favor, utilize uma requisição DELETE para excluir eventos."
            })
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/json')
        if (requisicao.method === "GET") {
            const termoDePesquisa = requisicao.params.termo
            const evento = new Evento (0)
            evento.consultar(termoDePesquisa).then((eventos) => {
                //conteúdo de eventos é a listaEventos
                resposta.status(200)
                resposta.json(eventos)
            })
            .catch((erro) => {
                resposta.status(500)
                resposta.json({
                    "status": false,
                    "mensagem": "Não foi possível consultar os eventos!" + erro.message
                })
            })
        }
        else {
            resposta.status(405)
            resposta.json({
                "status": false,
                "mensagem": "Por favor, informe o evento que gostaria de consultar conforme informações da API."
            })
        }
    }
}