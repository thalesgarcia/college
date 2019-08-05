class MsgView extends View{
    constructor(el){
        super(el)
    }

    template(mod){
        return  mod.text?`<p class="alert alert-success">${mod.text}</p>`:`<p></p>`
    }

    
}