//text databuilder, criação de cenarios de teste com valores, classes padrão
function PacienteBuilder(){
    var nome= "Jose";
    var idade = 29;
    var peso= 88;
    var altura= 1.78;

    var builder={
        constroi:function(){ return Paciente(nome,idade,peso,altura)},
        comIdade:function(valor){idade=valor; return this;},
        comPeso:function(valor){peso=valor; return this;}
    }
    return builder;
}