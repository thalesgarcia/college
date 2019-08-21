import React,{Component} from 'react';
import CustomInput from '../../Utils/CustomInput';

class VehicleForm extends Component{
    constructor(){
        super();
        this.inputListener=this.inputListener.bind(this);
        this.initialState={
            vehicles:[],
            name:'',
            model:'',
            vehicle_class:'',
            manufacturer:'',
            lenght:'',
            cost_in_credits:'',
            crew:'',
            passengers:'',
            max_atmosphering_speed:'',
            cargo_capacity:''
        }

        this.state=this.initialState;
    }

    inputListener=event=>{
        let{name,value}=event.target;
        this.setState({[name]:value});
    }

    submitForm=()=>{this.props.submitListener(this.state); this.setState(this.initialState)
    }

    render(){
        return(
            <form className="pure-form pure-form-aligned">
                <CustomInput name="name" id="name" label="Name" value={this.state.name} onChange={this.inputListener}/>
                <CustomInput name="model" id="model" label="Vehicle Model" value={this.state.model} onChange={this.inputListener}/>
                <CustomInput name="vehicle_class" id="vehicle_class" label="Vehicle Class" value={this.state.vehicle_class} onChange={this.inputListener}/>
                <CustomInput name="manufacturer" id="manufacturer" label="Manufacturer" value={this.state.manufacturer} onChange={this.inputListener}/>
                <CustomInput name="lenght" id="lenght" label="Size" value={this.state.lenght} onChange={this.inputListener}/>
                <CustomInput name="cost_in_credits" id="cost_in_credits" label="Cost" value={this.state.cost_in_credits} onChange={this.inputListener}/>
                <CustomInput name="crew" id="crew" label="Crew" value={this.state.crew} onChange={this.inputListener}/>
                <CustomInput name="passengers" id="passengers" label="Passengers" value={this.state.passengers} onChange={this.inputListener}/>
                <CustomInput name="max_atmosphering_speed" id="max_atmosphering_speed" label="Max speed" value={this.state.max_atmosphering_speed} onChange={this.inputListener}/>
                <CustomInput name="cargo_capacity" id="cargo_capacity" label="Cargo Capacity" value={this.state.cargo_capacity} onChange={this.inputListener}/>
                <div className="pure-g">
                    <div className="pure-u-1-5">
                        <button type="button" className="button-secondary pure-button button-large" onClick={this.submitForm}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
export default VehicleForm