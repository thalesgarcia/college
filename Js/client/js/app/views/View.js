class View{
    constructor(el){
        this._el=el
    }

    
    _update(mod){
        this._el.innerHTML=this.template(mod)
    }

    template(){
        throw new Error("it must be implemented ")
    }
}