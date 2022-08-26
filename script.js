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
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "AFEGANISTAO",
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
        nome: "METRO",
        categoria: "TRANSPORTE"
    },
    palavra008={
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
    palavra009={
        nome: "TAXI",
        categoria: "TRANSPORTE"
    },
    palavra010={
        nome: "UBER",
        categoria: "TRANSPORTE"
    },
    palavra011={
        nome: "MAMAO",
        categoria: "ALIMENTOS"
    },
    palavra012={
        nome: "ABACATE",
        categoria: "ALIMENTOS"
    },
    palavra013={
        nome: "PERA",
        categoria: "ALIMENTOS"
    },
    palavra014={
        nome: "GOIABA",
        categoria: "ALIMENTOS"
    },
    palavra015={
        nome: "MELAO",
        categoria: "ALIMENTOS"
    },
    palavra016={
        nome: "MARACUJA",
        categoria: "ALIMENTOS"
    },
     palavra017={
        nome: "JABUTICABA",
        categoria: "ALIMENTOS"
    },
    palavra018={
        nome: "JAMELAO",
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
        nome: "JACARE",
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
        nome: "TELEVISAO",
        categoria: "OBJETOS"
    },
    palavra042={
        nome: "CALCA",
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
        nome: "SOFA",
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
        nome: "ZIMBABUE",
        categoria: "LUGARES"
    },
    palavra053={
        nome: "AMSTERDA",
        categoria: "LUGARES"
    },
    palavra054={
        nome: "COLOMBIA",
        categoria: "LUGARES"
    },
    palavra055={
        nome: "SENEGAL",
        categoria: "LUGARES"
    },
    palavra056={
        nome: "ANJOS DA LEI",
        categoria: "FILMES"
    },
    palavra057={
        nome: "GAME OF THRONES",
        categoria: "SÉRIES"
    },
    palavra058={
        nome: "TOP GUN",
        categoria: "FILMES"
    },
    palavra059={
        nome: "JOGOS VORAZES",
        categoria: "FILMES"
    },
    palavra060={
        nome: "BREAKING BAD",
        categoria: "SÉRIES"
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
                if(palavraSecretaSorteada[i] == " "){
                    listaDinamica[i] = " ";
                    palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
                }
                else{
                    listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
                }
        }
        else{
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }

}

function verificaLetraEscolhida (letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra ("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();

    }
    
}

function mudarStyleLetra (tecla) {
    document.getElementById(tecla).style.background = "black";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0)
        {
            abreModal("OPS!", "Não foi desta vez... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
        
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if (palavraSecretaSorteada [i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if (palavraSecretaSorteada [i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!!!!", "VOCÊ É O CAMPEÃO!!!!");
        tentativas = 0;
    }



}

function carregaImagemForca() {
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./Assets/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./Assets/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./Assets/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./Assets/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./Assets/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./Assets/forca06.png')";
            break;

        default:
            document.getElementById("imagem").style.background = "url('./Assets/forca.png')";
            break;
    }
}


function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;


    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar") //quando é seletor, precisamos colocar o #
bntReiniciar.addEventListener("click", function() {
    location.reload(); // este evento vai atualizar a página
});