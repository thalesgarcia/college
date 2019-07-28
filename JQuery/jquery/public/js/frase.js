$("#shuffle").click(randomFrase);

function randomFrase(){
    $(".frase").text("")
    $("#spinner").toggle();
   $.get("http://localhost:3000/frases",changeFrase).fail(function(){
       $("#error").show()
       setTimeout(() => {
        $("#error").hide()
       }, 2000);
       
   }).always(function(){
        $("#spinner").toggle();
   });
}

function changeFrase(data){
    
    var randN= Math.floor(Math.random()*data.length);

    $(".frase").text(data[randN].texto)
    timeAdjust(data[randN].tempo)
    $("#size-frase").text(data[randN].texto.split(/\S+/).length-1)
}

$("#get-frase").click(getFrase);

function getFrase(){
    $(".frase").text("")
    $("#spinner").toggle();
    var idd=$("#f_id").val()
    var dados = {id:idd}
    console.log("AA ", dados)
    $.get("http://localhost:3000/frases",dados,getEspecFrase).fail(function(){
        $("#error").show()
        setTimeout(() => {
         $("#error").hide()
        }, 2000);
    }).always(function(){
        $("#spinner").toggle();
    })
}

function getEspecFrase(data){
    $(".frase").text(data.texto)
    timeAdjust(data.tempo)
    $("#size-frase").text(data.texto.split(/\S+/).length-1)
}
