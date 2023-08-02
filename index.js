var Leonardo = window.document.getElementById("Leonardo")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")
var setaEsq = window.document.getElementById("seta-esq")
var setaDir = window.document.getElementById("seta-dir")

function RolarParaDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaEsq.style = "display: flex; margin-Top:85px"
    setaDir.style = "display: none"
    

}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaEsq.style = "display: none"
    setaDir.style = "display: flex"
}