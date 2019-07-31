var fields=[
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];
var bd= document.querySelector('table tbody')

document.querySelector(".form").addEventListener("submit",function(event){
   event.preventDefault()
    var tr= document.createElement("tr");

    fields.forEach(function(c){
        var td= document.createElement("td");
        td.textContent=c.value;
        tr.appendChild(td);
    });
    
    var tdVol= document.createElement("td");
    tdVol.textContent=fields[1].value*fields[2].value;
    tr.appendChild(tdVol)
    bd.appendChild(tr);

    fields[0].value= ''
    fields[1].value=1
    fields[2].value=0

    fields[0].focus()

})