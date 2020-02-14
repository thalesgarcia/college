describe("Dados do paciente", function(){
    it("Imc",function(){
        var aux= new Paciente("Thales", 31,93,1.72);
        var im=aux.imc();
        expect(im).toEqual(93/(1.72*1.72));
    });
    it("batimentos", function(){
        var paciente= new Paciente("jose",42,85,1.55);
        expect(paciente.batimentos()).toEqual(1766016000);
    })
})