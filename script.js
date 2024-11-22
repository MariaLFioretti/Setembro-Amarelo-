var imgAtual = "img/imagem2.jpg";
var imgAnterior = "img/imagem1.png";

function trocar(){
    document.getElementById("figura").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
}






















