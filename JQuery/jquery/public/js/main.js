$(function(){
    startCounts();
    startCrono()
    restart()
    borders()
    $("#restart").attr("disabled", true);
    $("#input-field").val("");
    updateScore()
    $("#users").selectize({
        create: true,
        sortField: 'text'
    });
    $(".tooltip").tooltipster({
        tigger:'custom',
        theme:'tooltipster-punk',
        animation:'grow',
        delay:200
        
    })
})

var f= $(".frase").text();
var cont = f.split(/\S+/).length-1
var size= inputSize =0;
$("#size-frase").text(cont);

var field= $("#input-field")
var textField;

function startCounts(){
    field.on("keyup",function(){
        textField = $("#input-field").val();
        size = textField.split(/\S+/).length-1;//busca qqr espaco vazio
        inputSize=textField.length;
        $("#word-count").text(size);
        $("#char-count").text(inputSize);
        borders()
    });
}

function timeAdjust(t){
    $("#time-count").text(t);
}

function borders(){
    $("#input-field").on("keyup",function(){
        var f= $(".frase").text();
        var typedd= $("#input-field").val()
        var compared = f.substr(0,typedd.length)
        if(typedd == compared){
            $("#input-field").addClass("green_field");
            $("#input-field").removeClass("red_field");
        }else{
            $("#input-field").addClass("red_field")
            $("#input-field").removeClass("green_field");
        }
    })
}

var timeC= 10;
$("#time-count").text(timeC);

function startCrono(){
    timeC=10;
    field.one("focus",function(){
    var cronos= setInterval(() => {
            timeC--
            $("#time-count").text(timeC);
            if(timeC < 1){
                clearInterval(cronos)
                endGame();
            }
        }, 1000);
    })
}

function endGame(){
    field.attr("disabled", true);
    $("#restart").attr("disabled", false);
    field.addClass("disabled")
    insertScore();
}

function restart(){
    $("#restart").click(function(){
        field.val("");
        field.attr("disabled",false);
        $("#time-count").text(10);
        $("#word-count").text(0);
        $("#char-count").text(0);
        startCounts()
        startCrono()
        $("#restart").attr("disabled", true);
        field.removeClass("disabled")
        borders()
        $("#input-field").removeClass("green_field");
        $("#input-field").removeClass("red_field");
    })
}