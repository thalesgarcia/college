class ListNegociation{
    // constructor(context,trap){
    //     this._negotiacions=[]
    //     this._traps=trap
    //     this._context=context
    // }

    constructor(){
        this._negotiacions=[]
        // this._traps=trap
    }
    add(negos){
        //this._negotiacions=[].concat(this._negotiacions,negos)gambiarra
        this._negotiacions.push(negos);
        //this._traps(this)
        //1 the function to be called, 2 the parameter/context to be applied, its like the this wherever you call it, 3 the list or whatever you need
        //Reflect.apply(this._traps, this._context,[this])
    }

    get negotiations(){
        return [].concat(this._negotiacions)
    }

    emptyNeg(){
        this._negotiacions=[];
        //this._traps(this)
        //Reflect.apply(this._traps, this._context,[this])
    }

    get totalVol(){
        return this._negotiacions.reduce((tot,n)=>tot+n.volume,0.0)
    }

    order(criterio){
        this._negotiacions.sort(criterio)
    }
    reverseOrder(){
        this._negotiacions.reverse();
    }
}