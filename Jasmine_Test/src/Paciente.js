function Paciente(nome,idade,peso,altura){
    var paciente={
            imprime:function(){alert("O paciente :" + nome + "tem " +idade + " anos");
        },
        batimentos:function(){
            return idade *365 *24*60*80;
        },
        imc:function(){
            return peso/(altura*altura);
        }
    }
    return paciente;
}   