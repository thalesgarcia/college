import React, {Component} from 'react';

class CustomInput extends Component{
    render(){
        return(
                <div className="pure-control-group">
                    <label htmlFor={this.props.id}>{this.props.label}</label> 
                    <input id={this.props.id}type="text" name={this.props.name} value={this.props.value}  onChange={this.props.onChange}/>   
                </div>    
        );
    }
}

export default CustomInput;