function desliga(){
    var meuBody = document.getElementById("fundo"); //armazena o body (id "fundo") em uma variável

    if(meuBody.style.background == "white"){
        meuBody.style.background = "black";
    }

    else{
        meuBody.style.background = "white";
    }
}