
var can = document.getElementById('canvas');
var ctx = can.getContext('2d');

can.height = 600;
can.width = 1100;

desenhar();

function desenhar(){
    
    desenharCenario();

    requestAnimationFrame(desenhar);
}


function desenharCenario(){
    
    // Fundo
    desenhaBlocos(0, 0, can.width, can.height, "azul");
    
    // chão
    desenhaBlocos(can.height-60, 0, can.width, 60, "marrom");
    
    desenhaBlocos(390, 200, 30, 30, "amarelo");
    
    desenhaBlocos(250, 410, 30, 30, "amarelo");
    
    desenhaBlocos(390, 350, 30, 30, "marrom");
    desenhaBlocos(390, 380, 30, 30, "amarelo");
    desenhaBlocos(390, 410, 30, 30, "marrom");
    desenhaBlocos(390, 440, 30, 30, "amarelo");
    desenhaBlocos(390, 470, 30, 30, "marrom");

    desenhaBlocos(490, 590, 60, 50, "verde");
    desenhaBlocos(450, 580, 80, 40, "verde");
}

function desenhaBlocos(posiVertial, posiHorizontal, comprimento, altura, cor = null){

    let corRgba = "rgba(255,255,255, 10)";

    if(cor != null){

        if(cor == "marrom"){

            corRgba = "rgba(200, 120, 20, 10)";

        }else if(cor == "verde"){

            corRgba = "rgba(15, 190, 0, 10)";

        }else if(cor == "azul"){
            
            corRgba = "rgba(120, 150, 255, 10)";

        }else if(cor == "amarelo"){
            
            corRgba = "rgba(255, 255, 0, 10)";
        }
    }

    ctx.fillStyle = corRgba;
    ctx.fillRect(posiHorizontal, posiVertial, comprimento, altura);
}