var botao= document.querySelector("#adicionar-paciente");
var form= document.querySelector("#f-adciona");
document.querySelector("#erro").textContent="";
botao.addEventListener("click", function(event){
    document.querySelector("#erro").textContent="";
    event.preventDefault();//aborta o comportamento padrão
   var paciente= getFormData(form);

   var er= validateData(paciente);
   if(er.length>0 || er!=""){
     showErrorList(er);
      return; 
   } 
   addApiPacients(paciente);
    form.reset();
});



function addApiPacients(pacient){
    var tr = createTableLines(pacient);
    var tabela= document.querySelector("#tabela-pacientes");
    tabela.appendChild(tr);
    
}

function showErrorList(e){
    var ul = document.querySelector("#erro");
    ul.innerHTML="";
    e.forEach(element => {
        var li= document.createElement("li");
        li.textContent=element;
        ul.appendChild(li);
    });
}

function validateData(pacient){
    var r=[];
    if(!validateHeigth(pacient.altura))
        r.push("Altura Inválida!");
    if(!validateWeight(pacient.peso))
        r.push("Peso inválido");
    if(pacient.nome=="" || pacient.nome.length==0)
        r.push("Informe um nome");
    if(pacient.gordura <=0)
        r.push("Gordura invalida");
    if(pacient.gordura=="")
        r.push("Informe o % de gordura");
    if(pacient.peso=="")
        r.push("Informe um peso");
    if(pacient.altura=="")
        r.push("Informe uma altura");
    return r;
}
function validateWeight(w){
    if(w <= 0 || w >= 10000){
        return false;
    }
    else return true;
}
function validateHeigth(h){
    if(h <= 0 || h >= 3.00)
        return false;
    else return true
}


function getFormData(form){
    
    var paciente={
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function createTableLines(pacient){
    var pacientTr= document.createElement("tr");
    pacientTr.classList.add("paciente");

    pacientTr.appendChild(createTableColumns(pacient.nome,"info-nome"));
    pacientTr.appendChild(createTableColumns(pacient.peso,"info-peso"));
    pacientTr.appendChild(createTableColumns(pacient.altura,"info-altura"));
    pacientTr.appendChild(createTableColumns(pacient.gordura,"info-gordura"));
    pacientTr.appendChild(createTableColumns(pacient.imc,"info-imc"));

    return pacientTr;
}

function createTableColumns(data,classs){
    var td= document.createElement("td");
    td.textContent=data;
    td.classList.add(classs);

    return td;
}


