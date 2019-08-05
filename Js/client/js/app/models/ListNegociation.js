class ListNegociation{
    constructor(){
        this._negotiacions=[]
    }

    add(negos){
        this._negotiacions.push(negos)
    }

    get negotiations(){
        return [].concat(this._negotiacions)
    }
}