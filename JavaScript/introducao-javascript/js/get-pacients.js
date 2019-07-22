var b= document.querySelector("#get-pacient");
var resp;
b.addEventListener("click",function(){
    var xml= new XMLHttpRequest();
    xml.open("GET", "http://api-pacientes.herokuapp.com/psacientes");//connection config
    xml.addEventListener("load",function(){
        //console.log(xml.responseText);//method to show te response
        if(xml.status==200){
            var pacients= xml.responseText;
            resp= JSON.parse(pacients);
            resp.forEach(r => {
                addApiPacients(r)
            });
        }else{
            console.log("Status", xml.status, "Error", xml.response);
            document.querySelector("#req-error").classList.add("error");
            document.querySelector("#req-error").classList.remove("hide-el");
        }
        
        
    })
    xml.send();//send the request

    
})