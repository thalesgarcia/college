function insertScore(){
    var tbob= $(".score").find("tbody");
    var wC= $("#word-count").text();
    var user=$("#users option:selected").val();

    var line=createNewLine(user,wC);

    line.find(".del").click(removeLine)

    tbob.prepend(line);
    $(".score").slideDown(900);
    scroolScore();

}

// Create a object with html attributes
function createNewLine(us, words){

    var line = $("<tr>")
    var userColumn = $("<td>").text(us);
    var score= $("<td>").text(words);
    var removeColumn=$("<td>");
    var a= $("<a>").addClass("del").attr("href","#");
    var i= $("<i>").addClass("small").addClass("material-icons").text("delete");

    a.append(i); 
    removeColumn.append(a);
    line.append(userColumn);
    line.append(score);
    line.append(removeColumn);

    return line
}

function removeLine(){
        event.preventDefault();
        var line=  $(this).parent().parent()
        //it hides something or show something, it dosent remove it from his source. 
       line.fadeOut(1000);
       //wait x time to continue its course
       setTimeout(function(){
           line.remove()
       },1000)
       
}

$("#score").click(showScore)

function showScore(){
    //hide or show something according to time passed in seconds
    //the stop function prevente that the animation happens N times.
    $(".score").stop().slideToggle(900);
}

function scroolScore(){
   var posi= $(".score").offset().top;
   //animate recieves 2 paramenters, the first is a JS object and the second is the time
   $("html, body").animate({
       scrollTop: posi+"px"
   },1000)
}

$("#synch").click(syncScore);

function syncScore(){
    $("#spinner").toggle()
    var placar=[]
    var lines= $("tbody>tr");//direct child
    lines.each(function(){
        var usuario=$(this).find("td:nth-child(1)").text();
        var palavras=$(this).find("td:nth-child(2)").text()
        var score={
            usuario:usuario,
            pontos:palavras
        }

        placar.push(score);
    });
    var dados={
        placar:placar
    }
    $.post("http://localhost:3000/placar",dados,function(){
        $(".tooltip").tooltipster("open")
    }).always(function(){
        setTimeout(() => {
            $(".tooltip").tooltipster("open").tooltipster("content","Sucess")
        }, 2000);
        
        $("#spinner").toggle()
        setTimeout(function(){
            $(".tooltip").tooltipster("close")
        },2000)
    }).fail(function(){
        $(".tooltip").tooltipster("open").tooltipster("content", "Fail at synch")
        setTimeout(function(){
            $(".tooltip").tooltipster("close")
        },2000)
    })
    
}

function updateScore(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var line= createNewLine(this.usuario,this.pontos)
            line.find(".del").click(removeLine)
           $("tbody").append(line)
        })
    })
}