var pacients= document.querySelectorAll(".paciente");
console.log(pacients);

// pacients.forEach(paciente=>{
//     paciente.addEventListener("dblclick", function(){
//        this.remove();
//     })
// })

var table= document.querySelector("#tabela-pacientes");
 table.addEventListener("dblclick", function(event){
     //remove the "father" object when the child recieves the double click
     event.target.parentNode.classList.add("fade-out");
     setTimeout(function(){
        event.target.parentNode.remove();

     },500)
 })
