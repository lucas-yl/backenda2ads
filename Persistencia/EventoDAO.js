import conectar from "./Conexao.js";
import Evento from "../Modelos/Evento.js";

//DAO - Data Access Object
export default class EventoDAO {
    async gravar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar ( );
            const sql = `INSERT INTO evento (nome, horario, dia, localizacao, duracao, classificacao, preco, ingressos)
                        values (?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                evento.nome,
                evento.horario,
                evento.dia,
                evento.localizacao,
                evento.duracao,
                evento.classificacao,
                evento.preco,
                evento.ingressos
            ];
            
            const [resultados, campos] = await conexao.execute(sql,parametros);
            evento.codigo = resultados.insertId;
        }
    }

    async atualizar(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar ( );
            const sql = `UPDATE evento SET nome = ?, horario = ?, dia = ?, localizacao = ?, duracao = ?, classificacao = ?, preco = ?, ingressos = ? WHERE id = ?`;
            const parametros = [
                evento.nome,
                evento.horario,
                evento.dia,
                evento.localizacao,
                evento.duracao,
                evento.classificacao,
                evento.preco,
                evento.ingressos,
                evento.codigo
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async excluir(evento) {
        if (evento instanceof Evento) {
            const conexao = await conectar ( );
            const sql = `DELETE FROM evento WHERE id = ?`;
            const parametros = [
                evento.codigo
            ];

            await conexao.execute(sql,parametros);
        }
    }

    async consultar(termoDePesquisa) {
        if (termoDePesquisa === undefined){
            termoDePesquisa = "";
        }
        let sql = "";
        if (isNaN(termoDePesquisa)){
            sql = `SELECT * FROM evento WHERE nome LIKE ?`;
            termoDePesquisa = '%' + termoDePesquisa + '%';
        }
        else {
            sql = `SELECT * FROM evento WHERE id = ?`;
        }

        const conexao = await conectar ( );
        const [registros] = await conexao.execute(sql,[termoDePesquisa]);

        let listaEventos = [ ];
        for (const registro of registros){
            const evento = new Evento (
                registro.id,
                registro.nome,
                registro.horario,
                registro.dia,
                registro.localizacao,
                registro.duracao,
                registro.classificacao,
                registro.preco,
                registro.ingressos
            );
            listaEventos.push(evento);
        }
        return listaEventos;
    }
}