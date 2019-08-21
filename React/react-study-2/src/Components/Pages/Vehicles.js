import React,{Component,Fragment} from 'react';
import Menu from '../Menu';
import PopUp from '../../Utils/PopUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VehicleForm from '../Forms/VehicleForm'
import VehicleTable from '../Tables/VehicleTable'

class Vehicles extends Component{
    constructor(props){
        super(props);
        this.state={
            vehicles:[]
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/vehicles').then(res=>res.json()).then(res=>{this.setState({
            vehicles:[...this.state.vehicles,...res.results]
            })
        }).catch(err=>PopUp.showMessage('error','API Error, try again'))
    }

    submitListener=list=>{
        this.setState({vehicles:[...this.state.vehicles,list]})
    }
    removeListItem=(name)=>{
        let vehicle= this.state.vehicles;
        this.setState({
            vehicles:vehicle.filter((li)=>{
                return li.name!==name;
            })
        })
        PopUp.showMessage('warn','Vehicle removed');
    }

    render(){
        return(
            <Fragment>
                <div id="layout">
                    <Menu/>
                    <div id="main">
                        <ToastContainer/>
                        <div className="header">
                            <h1>Star wars Vehicles</h1>
                        </div>
                        <div className="content" id="content">
                        <div className="pure-form pure-form-aligned">
                            <VehicleForm submitListener={this.submitListener}/>     
                        </div>  
                        <div>            
                            <VehicleTable vehicles={this.state.vehicles} removeListItem={this.removeListItem}/>
                        </div>             
                    </div>
                    </div>
                </div>
            </Fragment>
        )
    }

} export default Vehicles;