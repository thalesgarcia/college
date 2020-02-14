//da para colocar o describe dentro do describe para deixar mais legivel os pedaços de teste
describe("Consulta", function(){
    var paciente;
    //executa antes de cada teste, isola o que for repetido
    beforeEach(function(){
        paciente = new PacienteBuilder().constroi();
    })
    it("Nao cobra nada se for retorno", function(){
        var consulta= new Consulta(paciente,[],true,true);
        expect(consulta.preco()).toEqual(0);
    });
    it("Deve cobrar 25 por cada procedimento comum", function(){
        var consulta= new Consulta(paciente,["exame de sangue"], false,false);

        expect(consulta.preco()).toEqual(25);
    })

})