import React, {Component,Fragment} from 'react';
import CustomInput from '../../Utils/CustomInput'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopUp from '../../Utils/PopUp';
class Form extends Component{

    constructor(){
        super();
        
       // this.sendForm=this.sendForm.bind(this);
        this.inputListener=this.inputListener.bind(this)
        this.initialState={
          list:[],
          name:'',
          height:'',
          skin_color:'',
          hair_color:'',
          mass:'',
          gender:'',
          eye_color:'',
          birth_year:'',
        }
    
        this.state=this.initialState;
      }
      inputListener=event=>{
        let {name,value}=event.target;
        this.setState({[name]:value});
      }
      submitForm=()=>{
          this.props.submitListener(this.state);
          this.setState(this.initialState);
          PopUp.showMessage('success','Successfuly recorded');
      }

    render(){
        return(
          <Fragment>
            <ToastContainer/>
            <form className="pure-form pure-form-aligned" >
                  <CustomInput  name="name" value={this.state.name}  onChange={this.inputListener} id="nome" type="text" label="Rebel Name"/>
                  <CustomInput  name="height" value={this.state.height}  onChange={this.inputListener} id="height" type="text" label="Height"/>
                  <CustomInput  name="mass" value={this.state.mass}  onChange={this.inputListener} id="mass" type="text" label="Mass"/>
                  <CustomInput  name="hair_color" value={this.state.hair_color}  onChange={this.inputListener} id="hair" type="text" label="Hair Color"/>
                  <CustomInput  name="skin_color" value={this.state.skin_color}  onChange={this.inputListener} id="skin" type="text" label="Skin Color"/>
                  <CustomInput  name="eye_color" value={this.state.eye_color}  onChange={this.inputListener} id="eye" type="text" label="Eye Color"/>
                  <CustomInput  name="birth_year" value={this.state.birth_year}  onChange={this.inputListener} id="birth" type="text" label="Birth Year"/>
                  <CustomInput  name="gender" value={this.state.gender}  onChange={this.inputListener} id="gender" type="text" label="Gender "/>
                 
                  <div className="pure-g">
                    <div className="pure-u-1-5">
                    <button type="button" className="button-secondary pure-button button-large" onClick={this.submitForm}>Send</button>
                    </div>
                  </div>
                  <div className="pure-control-group">    
                    <label></label> 
                  </div>
                </form>  
          </Fragment>
        )
    }
}
export default Form;