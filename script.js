
var can = document.getElementById('canvas');
var ctx = can.getContext('2d');

can.height = 600;
can.width = 5000;

var posiPersonVertPadrao = 480;

var posiPersonVert = posiPersonVertPadrao;
var posiPersonHori = 120;

var pulando = false;

var velocidade = 0;
var valorVelocidade = 3;
var teclaAnterior = null;
var puloDiagonal = false;

var salto = false;

desenhar();

function desenhar(){
    
    controle();

    desenharCenario();
    
    gravidade();
    
    desenharPersonagem();

    requestAnimationFrame(desenhar);
}


function desenharCenario(){
    
    // Fundo
    desenhaBlocos(0, 0, can.width, can.height, "azul");
    
    // chão
    desenhaBlocos(can.height-60, 0, 1800, 60, "marrom");
    
    desenhaBlocos(390, 200, 30, 30, "amarelo");
    
    desenhaBlocos(250, 410, 30, 30, "amarelo");
    
    desenhaBlocos(390, 350, 30, 30, "marrom");
    desenhaBlocos(390, 380, 30, 30, "amarelo");
    desenhaBlocos(390, 410, 30, 30, "marrom");
    desenhaBlocos(390, 440, 30, 30, "amarelo");
    desenhaBlocos(390, 470, 30, 30, "marrom");

    desenhaBlocos(490, 590, 60, 50, "verde");
    desenhaBlocos(450, 580, 80, 40, "verde");

    desenhaBlocos(440, 1010, 60, 100, "verde");
    desenhaBlocos(400, 1000, 80, 40, "verde");

    desenhaBlocos(440, 1510, 60, 100, "verde");
    desenhaBlocos(400, 1500, 80, 40, "verde");

    desenhaBlocos(can.height-60, 1950, 500, 60, "marrom");

    desenhaBlocos(390, 2300, 30, 30, "marrom");
    desenhaBlocos(390, 2330, 30, 30, "amarelo");
    desenhaBlocos(390, 2360, 30, 30, "marrom");

    desenhaBlocos(250, 2390, 30, 30, "marrom");
    desenhaBlocos(250, 2420, 30, 30, "marrom");
    desenhaBlocos(250, 2450, 30, 30, "marrom");
    desenhaBlocos(250, 2480, 30, 30, "marrom");
    desenhaBlocos(250, 2510, 30, 30, "marrom");
    desenhaBlocos(250, 2540, 30, 30, "marrom");

    desenhaBlocos(can.height-60, 2600, 2500, 60, "marrom");

    desenhaBlocos(250, 2630, 30, 30, "marrom");
    desenhaBlocos(250, 2660, 30, 30, "marrom");
    desenhaBlocos(250, 2690, 30, 30, "marrom");
    desenhaBlocos(250, 2720, 30, 30, "amarelo");

    desenhaBlocos(390, 2720, 30, 30, "marrom");

    desenhaBlocos(390, 3000, 30, 30, "marrom");
    desenhaBlocos(390, 3030, 30, 30, "marrom");
    desenhaBlocos(390, 3060, 30, 30, "marrom");

    desenhaBlocos(390, 3300, 30, 30, "amarelo");
    desenhaBlocos(390, 3400, 30, 30, "amarelo");
    desenhaBlocos(390, 3500, 30, 30, "amarelo");

    desenhaBlocos(250, 3400, 30, 30, "amarelo");

    desenhaBlocos(390, 3800, 30, 30, "marrom");

    desenhaBlocos(250, 3860, 30, 30, "marrom");
    desenhaBlocos(250, 3890, 30, 30, "marrom");
    desenhaBlocos(250, 3920, 30, 30, "marrom");

    desenhaBlocos(250, 4100, 30, 30, "marrom");
    desenhaBlocos(250, 4130, 30, 30, "amarelo");
    desenhaBlocos(250, 4160, 30, 30, "amarelo");
    desenhaBlocos(250, 4190, 30, 30, "marrom");

    desenhaBlocos(390, 4130, 30, 30, "marrom");
    desenhaBlocos(390, 4160, 30, 30, "marrom");


    // Escada subindo
    desenhaBlocos(510, 4500, 30, 30, "marrom");
    desenhaBlocos(510, 4530, 30, 30, "marrom");
    desenhaBlocos(510, 4560, 30, 30, "marrom");

    desenhaBlocos(480, 4530, 30, 30, "marrom");
    desenhaBlocos(480, 4560, 30, 30, "marrom");

    desenhaBlocos(450, 4560, 30, 30, "marrom");

    // Escada descendo
    desenhaBlocos(450, 4760, 30, 30, "marrom");

    desenhaBlocos(480, 4760, 30, 30, "marrom");
    desenhaBlocos(480, 4790, 30, 30, "marrom");

    desenhaBlocos(510, 4760, 30, 30, "marrom");
    desenhaBlocos(510, 4790, 30, 30, "marrom");
    desenhaBlocos(510, 4820, 30, 30, "marrom");
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

function colisao(){


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
            
            if(velocidade < 0){

                valorVelocidade = -3;

            }else if(velocidade > 0){
                
                valorVelocidade = 3;
            }

            if(pulando == true){

                if(puloInicial == true){

                    if(posiPersonVert > 300){
    
                        posiPersonVert = posiPersonVert - 30;
                    }else{
                        puloInicial = false;
                    }
                }
            }

            posiPersonHori = posiPersonHori + valorVelocidade;
        }
    }
}

function controle(){

    document.onkeydown = function(evt){
        
        teclaPressionada = true;

        verificarTeclaPressionada(evt);
    }

    document.onkeyup = function(){

        salto = true;
    }

    if(salto == true){

        if(velocidade > 0){

            velocidade--;
        }else if(velocidade < 0){

            velocidade++;
        }else if(velocidade == 0){

            salto = false;
        }
    }
}

var puloInicial = false;

function verificarTeclaPressionada(evt){

    if(evt != null){

        evt = evt || window.event;
        var key = evt.keyCode || evt.which;
    
        var str = String.fromCharCode(key);
        
        if(puloDiagonal == false || pulando == false){

            if(str == 'a' || str == 'A'){
                
                posiPersonHori = posiPersonHori - 10;
                
                // se tecla anterior for a mesma que a atual
                if(teclaAnterior == 'a'){
                    
                    velocidade = -10;
                }else{
                    velocidade = 0;
                }
        
                teclaAnterior = 'a';
            }
    
            if(str == 'd' || str == 'D'){
                
                posiPersonHori = posiPersonHori + 10;
        
                // se tecla anterior for a mesma que a atual
                if(teclaAnterior == 'd'){
                    
                    velocidade = 10;
                }else{
                    velocidade = 0;
                }
        
                teclaAnterior = 'd';
            }
        }

         
        if(str == ' '){

            // se pernonagem estiver no chão ( não pulando )
            if(pulando == false){

                puloInicial = true;

                if(velocidade != 0){
                    
                    posiPersonVert = posiPersonVert - 30;
    
                    puloDiagonal = true;
                }else{

                    posiPersonVert = posiPersonVert - 230;

                    puloDiagonal = false;
                }
    
                if(teclaAnterior == ' '){
    
                    velocidade = 0;
                }
    
                teclaAnterior = ' ';
            }
        }
    }
}