import React,{Component} from 'react';
import CustomInput from '../../Utils/CustomInput';
import PopUp from '../../Utils/PopUp';
class SpeciesForm extends Component{
    constructor(){
        super();
        this.inputListener= this.inputListener.bind(this);
        this.initialState={
            species:[],
            average_height:'',
            average_lifespan:'',
            classification:'',
            designation:'',
            eye_colors:'',
            hair_colors:'',
            language:'',
            name:'',
            skin_colors:'',
        }
        this.state=this.initialState;
    }

    inputListener=event=>{
        let{name,value}=event.target;
        this.setState({[name]:value});
    }

    submitForm=()=>{
        this.props.submitListener(this.state);
        this.setState(this.initialState);
        PopUp.showMessage('success','Successfuly recorded');
    }

    render(){
        return(
            <form className="pure-form pure-form-aligned">
                <CustomInput name="name" value={this.state.name} onChange={this.inputListener} id="name" type="text" label="Name"/>
                <CustomInput name="language" value={this.state.language} onChange={this.inputListener} id="language" type="text" label="Language"/>
                
                <CustomInput name="hair_colors" value={this.state.hair_colors} onChange={this.inputListener} id="hair_colors" type="text" label="Hair Color"/>
                <CustomInput name="eye_colors" value={this.state.eye_colors} onChange={this.inputListener} id="eye_colors" type="text" label="Eye Color"/>
                <CustomInput name="skin_colors" value={this.state.skin_colors} onChange={this.inputListener} id="skin_colors" type="text" label="Skin Color"/>
                <CustomInput name="designation" value={this.state.designation} onChange={this.inputListener} id="designation" type="text" label="Designation"/>
               
                <CustomInput name="classification" value={this.state.classification} onChange={this.inputListener} id="classification" type="text" label="Classification"/>
                <CustomInput name="average_lifespan" value={this.state.average_lifespan} onChange={this.inputListener} id="average_lifespan" type="text" label="Average Lifespan"/>
                <CustomInput name="average_height" value={this.state.average_height} onChange={this.inputListener} id="average_height" type="text" label="Height"/>

                <div className="pure-g">
                    <div className="pure-u-1-5">
                    <button type="button" className="button-secondary pure-button button-large" onClick={this.submitForm}>Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}export default SpeciesForm;