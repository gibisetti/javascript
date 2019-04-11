function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var resultado = peso / (altura * altura);
    var text;
    var gif;
    var cssclass;

    if(resultado < 18.5){
        text = "Uma deusa 🎵";
        gif = `<img src="https://media.giphy.com/media/OJbr914LLiETe/giphy.gif" alt="Beyoncé">`;
        cssclass = "linha1";
    }
    else if(resultado >= 18.5 && resultado < 25){
        text = "Uma louca 🎵";
        gif = `<img src="https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif" alt="Beyoncé">`;
        cssclass = "linha2";
    }
    else if(resultado >= 25 && resultado < 35){
        text = "Uma feiticeira 🎵";
        gif = `<img src="https://media.giphy.com/media/BxrFUN7RB9k8o/giphy.gif" alt="Beyoncé">`;
        cssclass = "linha3";
    }
    else if(resultado >=35 && resultado < 40){
        text = "Ela é demais 🎵";
        gif = `<img src="https://media.giphy.com/media/4F7OSamSWRBfi/giphy.gif" alt="Beyoncé">`;
        cssclass = "linha4";
    }
    else{
        text = "Meu deus, ela é demais 🎵";
        gif = `<img src="https://media.giphy.com/media/mngbEYFPa3NbG/giphy.gif" alt="Beyoncé">`;
        cssclass = "linha5";
    }

    resposta.innerHTML = "O seu IMC é " + resultado.toFixed(2) + " - " + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}