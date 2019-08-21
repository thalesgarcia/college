import React,{Component} from 'react';
import CustomInput from '../../Utils/CustomInput';
import PopUp from '../../Utils/PopUp';
class PlanetForm extends Component{
    constructor(){
        super();
        this.inputListener= this.inputListener.bind(this);
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
        }

        this.state=this.initialState
    }

    inputListener=event=>{
        let{name,value}=event.target;
        this.setState({[name]:value});
    }
    submitForm=()=>{
        this.props.submitListener(this.state);       this.setState(this.initialState); PopUp.showMessage ('success','Successfuly recorded');
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