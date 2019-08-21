import React,{Component} from 'react';
import CustomInput from '../../Utils/CustomInput';
import PopUp from '../../Utils/PopUp';
class StarShipForm extends Component{
    constructor(){
        super();
        this.inputListener= this.inputListener.bind(this);
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
        }

        this.state=this.initialState;
    }

    inputListener=event=>{
        let{name,value}=event.target;
        this.setState({[name]:value});
    }

    submitForm=()=>{this.props.submitListener(this.state);this.setState(this.initialState); PopUp.showMessage('success','Successfuly recorded');}

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