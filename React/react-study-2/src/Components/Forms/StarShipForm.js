import React,{Component} from 'react';
import CustomInput from '../../Utils/CustomInput';
import PopUp from '../../Utils/PopUp';
import FormValidator from '../../Utils/FormValidator'
class StarShipForm extends Component{
    constructor(){
        super();
        this.inputListener= this.inputListener.bind(this);

        this.validator= new FormValidator(
            [
                {
                    field:'name',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Plese type the starship name'
                },
                {
                    field:'model',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the starship model'
                },
                {
                    field:'starship_class',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the starship class'
                },
                {
                    field:'manufacturer',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the manufacturer'
                },
                {
                    field:'cost_in_credits',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the starship cost'
                },
                {
                    field:'cost_in_credits',
                    method:'isNumeric',
                    validWhen:true,
                    args:[{min:1,max:999999999}],
                    message:'Please type the value(number) of the starship'
                },
                {
                    field:'length',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the length of the starship'
                },
                {
                    field:'length',
                    method:'isInt',
                    validWhen:true,
                    args:[{min:1,max:9999}],
                    message:'Please inform the numeric length of the starship'
                },
                {
                    field:'crew',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please inform the total crew this starship supports'
                },
                {
                    field:'crew',
                    method:'isInt',
                    validWhen:true,
                    args:[{min:1,max:9999}],
                    message:'Crew field accepst only numbers'
                },
                {
                    field:'max_atmosphering_speed',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the max speed in atmosphere'
                },
                {
                    field:'max_atmosphering_speed',
                    method:'isInt',
                    validWhen:true,
                    args:[{min:1,max:999999}],
                    message:'Max speed accepts only numbers'
                },
                {
                    field:'passengers',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the max passengers this shipp accepts'
                },
                {
                    field:'passengers',
                    method:'isInt',
                    validWhen:true,
                    args:[{min:1,max:9999}],
                    message:'Passengers accepts only numbers'
                },
                {
                    field:'MGLT',
                    method:'isEmpty',
                    validWhen:false,
                    args:[{min:1,max:9999}],
                    message:'Please type the megalight of this starship'
                },
                {
                    field:'MGLT',
                    method:'isInt',
                    validWhen:true,
                    args:[{min:1,max:9999}],
                    message:'Megalight accepts only numbers'
                },
                {
                    field:'cargo_capacity',
                    method:'isEmpty',
                    validWhen:false,
                    args:[{min:1,max:9999}],
                    message:'Please type max cargo capacity for this ship'
                },
                {
                    field:'consumables',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the max consumables of this ship'
                },
                {
                    field:'consumables',
                    method:'isInt',
                    validWhen:true,
                    message:'Consumables accepsts only numbers'
                },
                {
                    field:'hyperdrive_rating',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the hyperdrive rating'
                }                               
            ]
        )

        this.initialState={
            ships:[],
            name:'',
            model:'',
            starship_class:'',
            manufacturer:'',
            cost_in_credits :'',
            length :'',
            crew:'',
            passengers:'',
            max_atmosphering_speed :'',
            hyperdrive_rating :'',
            MGLT:'',
            cargo_capacity :'',
            consumables :'',
            validation:this.validator.valid()
        }

        this.state=this.initialState;
    }

    inputListener=event=>{
        let{name,value}=event.target;
        this.setState({[name]:value});
    }

    submitForm=()=>{
        let validation=this.validator.validate(this.state);
        if(validation.isValid){
            this.props.submitListener(this.state);
            this.setState(this.initialState); 
            PopUp.showMessage('success','Successfuly recorded');}
        else{
            let {name,model,starship_class,manufacturer,cost_in_credits , length ,crew,passengers, max_atmosphering_speed ,hyperdrive_rating ,MGLT,cargo_capacity ,consumables}=validation;

            let fields=[name,model,starship_class,manufacturer,cost_in_credits , length ,crew,passengers, max_atmosphering_speed ,hyperdrive_rating ,MGLT,cargo_capacity ,consumables];
            let invalidFields=fields.filter(element=>{
                return element.isInvalid
            });
            invalidFields.forEach(field=>{
                PopUp.showMessage('error',field.message);
            })
        }
    }
        

    render(){

        return(
            <form className="pure-form pure-form-aligned">
                <CustomInput name="name" value={this.state.name} onChange={this.inputListener} id="name" type="text" label="Name"/>
                <CustomInput name="model" value={this.state.model} onChange={this.inputListener} id="model" type="text" label="Model"/>
                <CustomInput name="starship_class" value={this.state.starship_class} onChange={this.inputListener} id="starship_class" type="text" label="Starship Class"/>
                <CustomInput name="manufacturer" value={this.state.manufacturer} onChange={this.inputListener} id="manufacturer" type="text" label="Manufacturer"/>
                <CustomInput name="cost_in_credits" value={this.state.cost_in_credits} onChange={this.inputListener} id="cost_in_credits" type="text" label="Cost(credits)"/>
                <CustomInput name="length" value={this.state.length} onChange={this.inputListener} id="length" type="text" label="Ship Lenght"/>
                <CustomInput name="crew" value={this.state.crew} onChange={this.inputListener} id="crew" type="text" label="Crew (max)"/>
                <CustomInput name="passengers" value={this.state.passengers} onChange={this.inputListener} id="passengers" type="text" label="Passengers (max)"/>
                <CustomInput name="max_atmosphering_speed" value={this.state.max_atmosphering_speed} onChange={this.inputListener} id="max_atmosphering_speed" type="text" label="Max Speed"/>
                <CustomInput name="hyperdrive_rating" value={this.state.hyperdrive_rating} onChange={this.inputListener} id="hyperdrive_rating" type="text" label="Hyperdrive Rating"/>
                <CustomInput name="MGLT" value={this.state.MGLT} onChange={this.inputListener} id="MGLT" type="text" label="MGLT"/>
                <CustomInput name="cargo_capacity" value={this.state.cargo_capacity} onChange={this.inputListener} id="cargo_capacity" type="text" label="Cargo Capacity"/>
                <CustomInput name="consumables" value={this.state.consumables} onChange={this.inputListener} id="consumables" type="text" label="Consumables"/>


                <div className="pure-g">
                    <div className="pure-u-1-5">
                    <button type="button" className="button-secondary pure-button button-large" onClick={this.submitForm}>Submit</button>
                    </div>
                </div>
            </form>
        );
    }

}export default StarShipForm;