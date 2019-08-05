class NegociationController{
    constructor(){

        let $   = document.querySelector.bind(document);//like the jquery usage of $sign
        this._quantity = $("#quantidade");
        this._date= $("#data");
        this._val= $("#valor");
        this._negotiationList= new ListNegociation();
        this._negotiationView= new NegotiationView($('#negotiationView'))
        this._msg= new Msg()
        this._msgView= new MsgView($("#msgView"))
        this._msgView._update(this._msg)

        this._negotiationView._update(this._negotiationList);
    }

    add(event){
        event.preventDefault();

        this._negotiationList.add(this._createNegotiation());
        this._negotiationView._update(this._negotiationList)
        this._msg.text='Negotiation was successfuly added';
        this._msgView._update(this._msg);
        console.log(this._negotiationList.negotiations)
        this._clearForm()
    }

    _createNegotiation(){
        return new Negotiation(
            DateHelper.textToDate(this._date.value),
            this._quantity.value,
            this._val.value
        );
    }
    _clearForm(){
        this._date.value=''
        this._quantity.value=1
        this._val.value=0
        this._date.focus()
    }
}

//convert the input value into array to be interpreted as a date obj
        //let d= new Date(this._date.value.replace(/-/g,','))

        //spread method. Map method is like a for or foreach. it accepts a anonymous function where it takes 2 parametes, the first is the object it self, the second is the index of this object.
        // let d= new Date(...this._date.value.split('-').map(function(item,index){
        //     if(index==1){
        //         return item-1
        //     }
        //     return item})
        // )
        //the same function, but in a simple way, using arrow function. if the function have only one line, put it in inline code and remove the function and return words