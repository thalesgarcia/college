//pega o input da pesquisa
var field= document.querySelector("#filter-table");
//escutador do evento no input
field.addEventListener("input",function(){
    //pegando o valor digitado
    var aux = this.value;
    //pegando todas as linhas da tabela, pela classe
     var pacients= document.querySelectorAll(".paciente");
     //só busca se algo for digitado
     if(this.value.length>0){
         //percorrendo a lista 
        for (var i = 0; i < pacients.length; i++) {
            var p = pacients[i];
            //pegando o valor da coluna nome
            var nameTd= p.querySelector(".info-nome").textContent;
            // expressao regular, ignorando o case sensitive
            var exp= new RegExp(this.value, "i")
            if(!exp.test(nameTd)){
                //adc a classe para esconder os demais campos. .hide-el{display:none}
                p.classList.add("hide-el");
            }//se for igual ao q foi digitado, retira a classe
            else p.classList.remove("hide-el");
         }
     }
     else{
         //ao ficar com o tamanho 0, classe removida e exibe tudo
         for(var i=0; i<pacients.length;i++){
             var pp= pacients[i];
             pp.classList.remove("hide-el");
         }
     }
    
})