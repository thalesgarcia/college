function Consulta(paciente,procedimentos,particular,retorno,data){
    var consulta={
        preco:function(){
            if(retorno)return 0;
            var precoFinal=0;
            procedimentos.forEach(proce => {
                if(proce=="raio-x")
                    precoFinal+=55;
                else if(proce=="gesso")
                    precoFinal+=32;
                else  precoFinal+=25;
            });
            if(particular)
                precoFinal*=2;
            
                return precoFinal;
        },
        getNome: function(){
            return paciente;
        },
        getProcedimentos:()=>{return procedimentos},
        isParticular:()=>{return particular},
        isRetorno:()=>{return retorno},
        getData:()=>{return data}
    };
    return consulta;
}