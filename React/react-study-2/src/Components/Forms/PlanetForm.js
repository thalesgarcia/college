import React,{Component} from 'react';
import CustomInput from '../../Utils/CustomInput';
import PopUp from '../../Utils/PopUp';
import FormValidator from '../../Utils/FormValidator';
class PlanetForm extends Component{
    constructor(){
        super();
        this.inputListener= this.inputListener.bind(this);

        this.validator= new FormValidator(
            [
                {
                    field:'name',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type a planet name.'
                },
                {
                    field:'climate',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the planet climate'
                },
                {
                    field:'diameter',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Plese type the planete diameter'
                },
                {
                    field:'diameter',
                    method:'isInt',
                    validWhen:true,
                    args:[{min:0,max:999999}],
                    message:'Diameter accepsts only int.'
                },
                {
                    field:'gravity',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please type the planet gravity'
                },
                {
                    field:'gravity',
                    method:'isInt',
                    validWhen:true,
                    message:'Gravity accepst only int.'
                },
                {
                    field:'gravity',
                    method:'isNumeric',
                    validWhen:true,
                    message:'Type a number for gravity.'
                },
                {
                    field:'orbital_period',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Plese type the planet orbital period'
                },
                {
                    field:'orbital_period',
                    method:'isNumeric',
                    validWhen:true,
                    message:'Type a number for orbital period.'
                },
                {
                    field:'rotation_period',
                    method:'isNumeric',
                    validWhen:true,
                    message:'Rotation period accepts only numbers.'
                },
                {
                    field:'rotation_period',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Type a number for rotation period.'
                },
                {
                    field:'population',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please inform the population number.'
                },
                {
                    field:'population',
                    method:'isInt',
                    validWhen:true,
                    message:'Population accepts only numbers.'
                },
                {
                    field:'surface_water',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please inform the surface water of this planet(number).'
                },
                {
                    field:'surface_water',
                    method:'isInt',
                    validWhen:true,
                    message:'Inform the percentage, only numbers fro the surface water.'
                },
                {
                    field:'terrain',
                    method:'isEmpty',
                    validWhen:false,
                    message:'Please inform the terrain of this planet.'
                },
            ]
        )



        this.initialState={
            planets:[],
            climate:'',
            diameter:'',
            gravity:'',
            name:'',
            orbital_period:'',
            population:'',
            rotation_period:'',
            surface_water:'',
            terrain:'',
            validation:this.validator.valid()
        }

        this.state=this.initialState;

        

    }

    inputListener=event=>{
        let{name,value}=event.target;
        this.setState({[name]:value});
    }
    submitForm=()=>{
        let validation= this.validator.validate(this.state);

        if(validation.isValid){
            this.props.submitListener(this.state); 
            this.setState(this.initialState); 
            PopUp.showMessage ('success','Successfuly recorded');
        }else{
            let{name,diameter,rotation_period,orbital_period,gravity,population,climate,terrain,surface_water}=validation;
            let fields=[name,diameter,rotation_period,orbital_period,gravity,population,climate,terrain,surface_water];
            let invalidFields= fields.filter(element=>{
                return element.isInvalid;
            });
            invalidFields.forEach(field=>{
                PopUp.showMessage('error',field.message)
            })
        }
    }

    render(){
        return(
            <form className="pure-form pure-form-aligned">
                <CustomInput name="name" value={this.state.name} onChange={this.inputListener} id="name" type="text" label="Name"/>
                <CustomInput name="climate" value={this.state.climate} onChange={this.inputListener} id="climate" type="text" label="Climate"/>
                <CustomInput name="diameter" value={this.state.diameter} onChange={this.inputListener} id="diameter" type="text" label="Diameter"/>
                <CustomInput name="gravity" value={this.state.gravity} onChange={this.inputListener} id="gravity" type="text" label="gravity"/>
                <CustomInput name="orbital_period" value={this.state.orbital_period} onChange={this.inputListener} id="orbital_period" type="text" label="Orbital Period"/>
                <CustomInput name="rotation_period" value={this.state.rotation_period} onChange={this.inputListener} id="rotation_period" type="text" label="Rotation Period"/>
                <CustomInput name="population" value={this.state.population} onChange={this.inputListener} id="population" type="text" label="Population"/>
                <CustomInput name="surface_water" value={this.state.surface_water} onChange={this.inputListener} id="surface_water" type="text" label="Surface Water"/>
                <CustomInput name="terrain" value={this.state.terrain} onChange={this.inputListener} id="terrain" type="text" label="Terrain"/>
                <div className="pure-g">
                <div className="pure-u-1-5">
                <button type="button" className="button-secondary pure-button button-large" onClick={this.submitForm}>Submit</button>
                </div>
            </div>
            </form>
        )
    }
} export default PlanetForm