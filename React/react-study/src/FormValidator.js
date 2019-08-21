import Validator from 'validator'

class FormValidator{

    constructor(valids){
        this.valids=valids
    }

    validate(state){
        let validation=this.valid();

        this.valids.forEach(rule=>{

            let inputField= state[rule.field.toString()];
            let args=rule.args||[];

            let inputMethod=typeof rule.method==='string' ? Validator[rule.method]:rule.method;

            if(inputMethod(inputField,...args,state)!== rule.isValid){
                validation[rule.field]={
                    isInvalid:true,
                    msg:rule.msg
                };
                validation.isValid=false
            }
        })
        return validation
       
    }
    //returns the whole obj. Receives all the input fields and the rules
    valid(){
        let validation={};
        this.valids.map((rule) =>{
            validation[rule.field]={
                isInvalid:false,
                msg:''
            }
        });
        return {isValid:true,...validation}
    }
}
export default FormValidator