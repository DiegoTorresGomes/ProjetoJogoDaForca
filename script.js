let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "INDONÉSIA",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "AFEGANISTÃO",
        categoria: "LUGARES"
    },
    palavra005={
        nome: "HUNGRIA",
        categoria: "LUGARES"
    },
    palavra006={
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra007={
        nome: "METRÔ",
        categoria: "TRANSPORTE"
    },
    palavra008={
        nome: "ÔNIBUS",
        categoria: "TRANSPORTE"
    },
    palavra009={
        nome: "TÁXI",
        categoria: "TRANSPORTE"
    },
    palavra010={
        nome: "UBER",
        categoria: "TRANSPORTE"
    },
    palavra011={
        nome: "MAMÃO",
        categoria: "ALIMENTOS"
    },
    palavra012={
        nome: "ABACATE",
        categoria: "ALIMENTOS"
    },
    palavra013={
        nome: "MAÇÃ",
        categoria: "ALIMENTOS"
    },
    palavra014={
        nome: "GOIABA",
        categoria: "ALIMENTOS"
    },
    palavra015={
        nome: "MELÃO",
        categoria: "ALIMENTOS"
    },
    palavra016={
        nome: "MARACUJÁ",
        categoria: "ALIMENTOS"
    },
     palavra017={
        nome: "JABUTICABA",
        categoria: "ALIMENTOS"
    },
    palavra018={
        nome: "JAMELÃO",
        categoria: "ALIMENTOS"
    },
    palavra019={
        nome: "TANGERINA",
        categoria: "ALIMENTOS"
    },
    palavra020={
        nome: "TOMATE",
        categoria: "ALIMENTOS"
    },
    palavra021={
        nome: "MONITOR",
        categoria: "OBJETOS"
    },
    palavra022={
        nome: "MOUSE",
        categoria: "OBJETOS"
    },
    palavra023={
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra024={
        nome: "CELULAR",
        categoria: "OBJETOS"
    },
    palavra025={
        nome: "ROTEADOR",
        categoria: "OBJETOS"
    },
    palavra026={
        nome: "CANECA",
        categoria: "OBJETOS"
    },
    palavra027={
        nome: "CADEIRA",
        categoria: "OBJETOS"
    },
    palavra028={
        nome: "TESOURA",
        categoria: "OBJETOS"
    },
    palavra029={
        nome: "LOUSA",
        categoria: "OBJETOS"
    },
    palavra030={
        nome: "CANETA",
        categoria: "OBJETOS"
    },
    palavra031={
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    },
    palavra032={
        nome: "COBRA",
        categoria: "ANIMAIS"
    },
    palavra033={
        nome: "MACACO",
        categoria: "ANIMAIS"
    },
    palavra034={
        nome: "GATO",
        categoria: "ANIMAIS"
    },
    palavra035={
        nome: "JACARÉ",
        categoria: "ANIMAIS"
    },
    palavra036={
        nome: "CROCODILO",
        categoria: "ANIMAIS"
    },
    palavra037={
        nome: "ABELHA",
        categoria: "ANIMAIS"
    },
    palavra038={
        nome: "MOSCA",
        categoria: "ANIMAIS"
    },
    palavra039={
        nome: "MOSQUITO",
        categoria: "ANIMAIS"
    },
    palavra040={
        nome: "JAGUATIRICA",
        categoria: "ANIMAIS"
    },
    palavra041={
        nome: "TELEVISÃO",
        categoria: "OBJETOS"
    },
    palavra042={
        nome: "CALÇA",
        categoria: "ROUPAS"
    },
    palavra043={
        nome: "BLUSA",
        categoria: "ROUPAS"
    },
    palavra044={
        nome: "JAQUETA",
        categoria: "ROUPAS"
    },
    palavra045={
        nome: "CAMISETA",
        categoria: "ROUPAS"
    },
    palavra046={
        nome: "MEIA",
        categoria: "ROUPAS"
    },
    palavra047={
        nome: "SHORT",
        categoria: "ROUPAS"
    },
    palavra048={
        nome: "LUVA",
        categoria: "ROUPAS"
    },
    palavra049={
        nome: "SOFÁ",
        categoria: "OBJETOS"
    },
    palavra050={
        nome: "ALMOFADA",
        categoria: "OBJETOS"
    },
    palavra051={
        nome: "SINGAPURA",
        categoria: "LUGARES"
    },
    palavra052={
        nome: "ZIMBÁBEE",
        categoria: "LUGARES"
    },
    palavra053={
        nome: "AMSTERDÃ",
        categoria: "LUGARES"
    },
    palavra054={
        nome: "COLÔMBIA",
        categoria: "LUGARES"
    },
    palavra055={
        nome: "SENEGAL",
        categoria: "LUGARES"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta () {
    const indexPalavra = parseInt(Math.random () * palavras.length);
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)

}


montarPalavraNaTela ();
function montarPalavraNaTela () {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = " ";

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica [i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

function verificaLetraEscolhida (letra){
    if(tentativas > 0)
    {
        mudarStyleLetra ("tecla-" + letra);
    }
    
}

function mudarStyleLetra (tecla) {
    document.getElementById(tecla).style.background = "black";
    document.getElementById(tecla).style.color = "#ffffff";
}