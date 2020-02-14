function Agendamento(){
    var agendamento ={
        para: (consulta)=>{
            let umDiaEmMillisegundos= 1000*60*60*24
            let vinteDiasEmMillisegundos=umDiaEmMillisegundos*20;

            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMillisegundos);
            while(novaData.getDay()==0|| novaData.getDay()==6){
                novaData= new Date(novaData.getTime()+umDiaEmMillisegundos);
            }


            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(),consulta.isParticular(),true,novaData);

            return novaConsulta;
        }
    }
    return agendamento;
}