//rota = micro aplicacao express que processa requisicoes de um determinado endpoint
//http://localhost:3000/cliente
//cliente = endpoint
//localhost = dominio da aplicacao
import {Router} from 'express'
import eventoCtrl from "../Controles/eventoCtrl.js"

const rotaEvento = new Router( )
const eveCtrl = new eventoCtrl( )

rotaEvento
.get('/', eveCtrl.consultar)
.get('/:termo', eveCtrl.consultar) //ao receber método GET, atribuir função consultar
.post('/', eveCtrl.gravar)
.put('/:codigo', eveCtrl.atualizar)
.patch('/:codigo', eveCtrl.atualizar)
.delete('/:codigo', eveCtrl.excluir)

export default rotaEvento