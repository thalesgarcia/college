describe("Agendamento",()=>{
    let paciente, agenda;
    beforeEach(()=>{
        paciente= new PacienteBuilder().constroi();
         agenda= new Agendamento();
    });
    it("Agendar 20 dias depois",()=>{
       
        
        let consulta = new Consulta(paciente,[],false,false,new Date(2020,2,09));
        var novaConsulta= agenda.para(consulta);

        expect(novaConsulta.getData().toString()).toEqual(new Date(2020,2,30).toString())
    });
    it("skip weekends",()=>{
        let consulta = new Consulta(paciente,[],false,false,new Date(2020,6,30));
        var novaConsulta= agenda.para(consulta);
        expect(novaConsulta.getData().toString()).toEqual(new Date(2020,7,19).toString());
    });
    

})