class Negotiation{
    //Constructor, all values instanciated and initialized
    constructor(d,q,v){

        this._date= new Date(d.getTime());
        this._quantity=q;
        this._value=v;
          //congela a classe e impede alterar os valores, retorna como "private". Ele é bem fraco. Ignora objetos, é uma solução fraca e nao tao profunda
        Object.freeze(this)
    }

    // getVolume(){
    //     return this._quantity * this._value
    // }

    // getDate(){
    //     return this._date;
    // }
    // getQuantity(){
    //     return this._quantity
    // }
    // getValue(){
    //     return this._value
    // }
    // outra forma onde se usa o metodo get como uma propriedade
    get date(){
        //isso é uma programacao defensiva
        return new Date(this._date.getTime());
    }
    get quantity(){
        return this._quantity
    }
    get value(){
        return this._value
    }
    get volume(){
        return this._quantity * this._value
    }
    //para usar é só chamar o nome depois do get -> var x =n1.value; Nao coloca o () depois do nome

  
}