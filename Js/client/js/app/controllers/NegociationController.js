class NegociationController{
    constructor(){

        let $   = document.querySelector.bind(document);//like the jquery usage of $sign
        this._quantity = $("#quantidade");
        this._date= $("#data");
        this._val= $("#valor");

        this._negotiationList= new Bind(
            new ListNegociation(),new NegotiationView($('#negotiationView')),'add','emptyNeg','order','reverseOrder');
        this._actualOrder=''
        // ProxyFactory.create(new ListNegociation(),['add','emptyNeg'],(mod)=>{
        //     this._negotiationView._update(mod);
        // });
 
        //this._negotiationView._update(this._negotiationList);
        // this._negotiationList= new ListNegociation(this,function(mod){
        //     this._negotiationView._update(mod)
        // }); 
        //the scope in arrow functions is lexic e not dinamic, it dosent change when the context is changed. The this here belongs to this controller, it keeps its value where its created
                // this._negotiationList= new ListNegociation((mod)=>{
        //     this._negotiationView._update(mod)
        // });
        this._msg= new Bind(
            new Msg(),new MsgView($("#msgView")),'text');
        
       
        // ProxyFactory.create( new Msg(),['text'],(mod)=>{
        //     this._msgView._update(mod)
        // })
        
       // this._msgView._update(this._msg)
    }

    add(event){
        event.preventDefault();
        try{
            this._negotiationList.add(this._createNegotiation());
            this._msg.text='Negotiation was successfuly added';
            // this._msgView._update(this._msg);
            console.log(this._negotiationList.negotiations)
            this._clearForm()
            
            setTimeout(function(){
                console.log("ASD")
                document.querySelector("#msgView").classList.add("fade-out");
                setTimeout(()=>{
                    document.querySelector("#msgView").classList.add("hidemsg");
                },1000)
            },2000)
        }catch(error){
            this._msg.text=error
        }
        
    
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

    deleteNeg(){
        this._negotiationList.emptyNeg();
  
        this._msg.text='List deleted';
        //this._msgView._update(this._msg)
    }
    importNeg(){
      let neg=  new NegotiationServices();
      
      neg.getNegotiations().then(negos=>{
          negos.forEach(nego=>this._negotiationList.add(nego));
          this._msg.text="Month negotiations imported"
      }).catch(error=>this._msg.text=error)
      setTimeout(function(){
        console.log("ASD")
        document.querySelector("#msgView").classList.add("fade-out");
        setTimeout(()=>{
            document.querySelector("#msgView").classList.add("hidemsg");
        },1000)
    },2000)

    }

    order(column){
        if(this._actualOrder==column){
            this._negotiationList.reverseOrder();
        }else{
            this._negotiationList.order((a,b)=>a[column]-b[column])
        }
        this._actualOrder=column
    }

    sendPost(event){
        event.preventDefault();
        let negociacao={ 
            data: this._date.value,
            quantidade:this._quantity.value,
            valor: this._val.value
        }
        //console.log(negociacao)
        new HttpService().post('/negociacoes',negociacao).then(()=> {
            this._clearForm();
             this._msg.text="Data send";
             setTimeout(function(){
                console.log("ASD")
                document.querySelector("#msgView").classList.add("fade-out");
                setTimeout(()=>{
                    document.querySelector("#msgView").classList.add("hidemsg");
                },1000)
            },2000);
            this.importNeg();
            }).catch(error=>{
                alert("Couldnt send list");
                console.log(error)
            })
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