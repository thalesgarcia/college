import React,{Component}from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';
class Form extends Component{

    constructor(props){
        super(props);
        this.validator=new FormValidator(
            [
                {
                    field:'nome',
                    method:'isEmpty',
                    isValid:false,
                    msg:'Please type a name'
                },
                {
                    field:'livro',
                    method:'isEmpty',
                    isValid:false,
                    msg:'Please type a book'
                },
                {
                    field:'preco',
                    method:'isInt',
                    args:[{min:0,max:9999}],
                    isValid:true,
                    msg:'Please type a price'
                },
            ]
        );
        this.initialState={
            nome:'',
            livro:'',
            preco:'',
            validation:this.validator.valid()
        }
        this.inputistener= this.inputistener.bind(this)

        this.state=this.initialState;
    }

    inputistener=(event)=>{
        let{name,value}=event.target;
        this.setState({
            [name]:value
        })
    }
   
    submitForm=()=>{

        let validation=this.validator.validate(this.state)

        if(validation.isValid){
            this.props.submitListener(this.state);
            this.setState(this.initialState)
        }else{
            let {nome, livro, preco }= validation;
            let fields=[nome,livro,preco]

            let invalidFields=fields.filter(elem=>{
                return elem.isInvalid;
            });
            invalidFields.forEach(field=>{
                PopUp.showMessage('error',field.msg)
            })
        }
           
    }

    render(){
        let {nome,livro,preco}=this.state

        return(
            <form action="">
                <div className="container">
                    <div className="row"> 
                        <div className="input-field col s4"> 
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" name="nome" placeholder="AUTHOR" value={nome} onChange={this.inputistener} type="text" className="validate"/>
                    </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">book</i>
                            <input type="text" name="livro" placeholder="BOOK" id="livro" className="validate" value={livro} onChange={this.inputistener}/>
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">attach_money</i>
                            
                            <input type="text" placeholder="Price" name="preco" id="preco" className="validate" value={preco} onChange={this.inputistener}/>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col s6 offset-s5">
                            <button type="button" onClick={this.submitForm} className="waves-effect orange darken-1 btn centered">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}export default Form