import validator from 'validator'

class FormValidator{
    constructor(validations){
        //array of rules specific to a form
        this.validations=validations;
    }


    validate(state){
        //starts assuming everything is valid
        let validation=this.valid();
        //iterating trhough the rules
        this.validations.forEach(rule => {
             // if the field isn't already marked invalid by an earlier rule
             if(!validation[rule.field].isInvalid){
                 //determine the field value, the method to invoke and optional args from the rule definition
                 let field_val=state[rule.field].toString();
                 //has to be a string because the validator plugin
                 //if the rules has some args, else leave it empty
                 let args= rule.args||[];
                 //if the method is string uses the rules from plugin, else uses what is passed
                 let validation_method= typeof rule.method ==='string' ? validator[rule.method]: rule.method

                // call the validation_method with the current field value
                // as the first argument, any additional arguments, and the whole state as a final argument.  If the result doesn't match the rule.validWhen property, then modify the validation object for the field and set the isValid field to false
                if(validation_method(field_val,...args,state)!== rule.validWhen){
                    validation[rule.field]={
                        isInvalid:true,
                        message:rule.message
                    }
                    validation.isValid=false;
                }
             }
        });
        return validation;
    }
    //create a validation obj for a valid form
    valid(){
        let validation={};
        this.validations.map((rule) => {
            validation[rule.field]={
                isInvalid:false, 
                message:''
            }
        });
        return {isValid: true, ...validation};
    }
}
export default FormValidator