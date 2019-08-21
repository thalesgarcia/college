import React,{Component,Fragment} from 'react';

import Menu from '../Menu';
import Table from '../Tables/Table';
import Form from '../Forms/Form';
import $ from 'jquery';
import PopUp from '../../Utils/PopUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class People extends Component{
    
    constructor(props){
        super(props);
        this.state={
        list:[],
        }
    }
    componentDidMount(){
        $.ajax({
        url:'https://swapi.co/api/people',
        dataType:'json',
        success:function(resp){
            this.setState({list:[...this.state.list,...resp.results]})
            //console.log(this.state.list);
        }.bind(this)
        })
    }
  
    submitListener= list => {
        this.setState({ list: [...this.state.list, list] });
        
        
    }
 
    removeListItem=(name)=>{
        //console.log("OI", name);
        let list = this.state.list;
        
        this.setState({
            list: list.filter((li)=>{
            //if the clicked position is != of index, return, if is equal, dont return
            return li.name !== name;
            })
        });
        PopUp.showMessage('error', 'Person removed');
        
    }
    render(){
        return (
        <Fragment>
            <div id="layout">
                <Menu/>
                <div id="main">
                    <ToastContainer/>
                    <div className="header">
                        <h1>Star Wars Population</h1>
                    </div>
                    <div className="content" id="content">
                        <div className="pure-form pure-form-aligned">
                            <Form submitListener={this.submitListener}/>     
                        </div>  
                        <div>            
                            <Table list={this.state.list} removeListItem={this.removeListItem}/>
                        </div>             
                    </div>
                </div>  
            </div>
        </Fragment>
        );
    }
}
export default People