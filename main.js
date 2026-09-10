const botaoLiga = document.getElementById("botaoliga");
const botaoDesliga = document.getElementById("botaodesliga");

botaoLiga.addEventListener("click", function () {

    botaoLiga.classList.add("ligado");
    botaoDesliga.classList.remove("ligado");

    document.body.classList.add("luz");

});


botaoDesliga.addEventListener("click", function () {

    botaoDesliga.classList.add("ligado");
    botaoLiga.classList.remove("ligado");

    document.body.classList.remove("luz");

});