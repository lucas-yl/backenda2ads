import express from "express"
import Evento from "./Modelos/Evento.js"
import rotaEvento from "./Rotas/rotaEvento.js"

const host = '0.0.0.0'
const porta = 3000

const app = express( )
//express interpretar json
app.use(express.json( ))
//express utiliza a biblioteca QS para interpretar formato da URL
app.use(express.urlencoded({extended: true}))

app.use('/eventos', rotaEvento)
app.listen(porta, host, ( ) => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})

// EVENTOS

//const evento = new Evento(0, "Banda THUNDER", "18h00", "20/03 - Quarta-Feira", "Teatro PP1", "2 horas", "Livre", "50", "100");
//const evento = new Evento(1, "Banda EARTH", "19h00", "21/03 - Quinta-Feira", "Teatro PP2", "1 hora", "Livre", "40", "90");
//const evento = new Evento(2, "Banda ICE", "20h00", "22/03 - Sexta-Feira", "Teatro PP1", "45 minutos", "Livre", "55", "110");
const evento = new Evento(9, "Banda ICE", "22h00", "23/03 - Sábado", "Teatro PP2", "45 minutos", "Livre", "60", "125");

// GRAVAR

evento.gravar( ).then(( ) => {
    console.log("Evento gravado com sucesso!");
}).catch((erro) => {
    console.log(erro);
});

// ATUALIZAR

/* evento.atualizar( ).then(( ) => {
    console.log("Evento atualizado com sucesso!");
}).catch((erro) => {
    console.log(erro);
}); */

// EXCLUIR

/* evento.excluir( ).then(( ) => {
    console.log("Evento excluído com sucesso!");
}).catch((erro) => {
    console.log(erro);
}); */

//CONSULTAR

/* const eventoQQ  = new Evento ( );

eventoQQ.consultar("EARTH").then((listaEventos) => {
    console.log("Evento(s) consultado(s):")
    for (const evento of listaEventos) {
        console.log(evento.toJSON( ));
}
}).catch((erro) => {
    console.log("Não foi possível consultar o evento.", erro);
}); */