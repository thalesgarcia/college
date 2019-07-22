var titulo= document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent="Nutrição da Cida";//altera o conteudo de texto do elemento


var paciente = document.querySelectorAll(".paciente");
for (let i = 0; i < paciente.length; i++) {
    var peso=0;var alt=0;var imc =0;
    var p = paciente[i];
    peso = p.querySelector(".info-peso").textContent;
    alt = p.querySelector(".info-altura").textContent;
    var altV=validateHeigth(alt);
    var pesV=validateWeight(peso);
   if(!altV){
       p.classList.add("paciente-invalido");
       p.querySelector(".info-imc").textContent="Altura inválida"
   }
   if(!pesV){
    p.classList.add("paciente-invalido");
    p.querySelector(".info-imc").textContent="Peso inválido"
   }

    if(pesV && altV){
       imc =calculaImc(peso,alt) ;
        p.querySelector(".info-imc").textContent=imc;
    }
    
}
// function mostraMensagem(){
//     console.log("clicou!!");
// }

function calculaImc(peso,altura){
    var imc= 0;
    imc = peso/ (altura*altura);
    return imc.toFixed(2);
}
