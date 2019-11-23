
var can = document.getElementById('canvas');
var ctx = can.getContext('2d');

can.height = 600;
can.width = 1100;

var posiPersonVertPadrao = 480;

var posiPersonVert = posiPersonVertPadrao;
var posiPersonHori = 120;

var pulando = false;

var teclaPressionada = false;

desenhar();

function desenhar(){
    
    teclaPressionada = false;

    document.onkeypress = function(evt){
        
        teclaPressionada = true;

        teste(evt);
    }

    desenharCenario();
    
    gravidade();
    
    desenharPersonagem();

    if(teclaPressionada == false){

        //teclaAnterior = null;        
    }

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

    if(cor != "azul"){

        
    }

    ctx.fillStyle = corRgba;
    ctx.fillRect(posiHorizontal, posiVertial, comprimento, altura);
}

function desenharPersonagem(){

    ctx.fillStyle = "rgba(255, 0, 0, 10)";
    ctx.fillRect(posiPersonHori, posiPersonVert, 30, 60);
}

function gravidade(){

    if(posiPersonVert != posiPersonVertPadrao){

        pulando = true;

        posiPersonVert = posiPersonVert + 5;
    }else{
        pulando = false;
    }

    if(pulando == true){

        if(puloDiagonal == true){
    
            posiPersonHori = posiPersonHori + velocidade;

            if(velocidade == 0){

                puloDiagonal = false;
            }
        }
    }
}

function colisao(){


}

var velocidade = 0;
var teclaAnterior = null;
var puloDiagonal = false;

function teste(evt){

    if(evt != null){

        evt = evt || window.event;
        var key = evt.keyCode || evt.which;
    
        var str = String.fromCharCode(key);
        
        if(str == 'a' || str == 'A'){
            
            posiPersonHori = posiPersonHori - 10;
            
            if(teclaAnterior == 'a'){
                
                velocidade = -3;
            }else{
                velocidade = 0;
            }
    
            teclaAnterior = 'a';
        }

        if(str == 'd' || str == 'D'){
            
            posiPersonHori = posiPersonHori + 10;
    
            if(teclaAnterior == 'd'){
                
                velocidade = 3;
            }else{
                velocidade = 0;
            }
    
            teclaAnterior = 'd';
        }
         
        if(str == ' '){

            if(pulando == false){
                
                posiPersonVert = posiPersonVert - 220;
    
                if(velocidade != 0){
    
                    puloDiagonal = true;
                }else{
                    puloDiagonal = false;
                }
    
                if(teclaAnterior == ' '){
    
                    velocidade = 0;
                }
    
                teclaAnterior = ' ';
            }
        }
    }
};