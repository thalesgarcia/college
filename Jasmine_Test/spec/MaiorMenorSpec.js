describe("Maior e Menor", function(){
    it("deve entender numeros em ordem sequencial", function(){
        var algo= new MaiorMEnor();
        algo.encontra([5,15,7,9]);

        expect(algo.pegaMenor()).toEqual(5);
        expect(algo.pegaMaior()).toEqual(15);
    });//explicação do teste

    it("deve entender numeros em ordem crescente", function(){
        var algori= new MaiorMEnor();
        algori.encontra([5,6,7,8]);
        expect(algori.pegaMaior()).toEqual(8);
        expect(algori.pegaMenor()).toEqual(5);
    });
    it("deve entender numeros em ordem decrescente", function(){
        var algori= new MaiorMEnor();
        algori.encontra([8,7,6,5]);
        expect(algori.pegaMaior()).toEqual(8);
        expect(algori.pegaMenor()).toEqual(5);
    });
    it("array com um unico elemento", function(){
        var aux= new MaiorMEnor();
        aux.encontra([2]);
        expect(aux.pegaMaior()).toEqual(2);
        expect(aux.pegaMenor()).toEqual(2);
    })
})