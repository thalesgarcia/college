import React,{Component,Fragment} from 'react';
import Menu from '../Menu';
import PopUp from '../../Utils/PopUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlanetForm from '../Forms/PlanetForm'
import PlanetTable from '../Tables/PlanetTable'
class Planets extends Component{
    constructor(props){
        super(props);
        this.state={planets:[]}
    }

    componentDidMount(){
        fetch('https://swapi.co/api/planets').then(res=>res.json()).then(res=>{
            this.setState({planets:[...this.state.planets,...res.results]})
        }).catch(err=>PopUp.showMessage('error','API Error, try again'));
    }

    submitListener=plan=>{
        this.setState({planets:[...this.state.planets,plan]})
    }

    removeListItem=(name)=>{
        let plan = this.state.planets;
        this.setState({
            planets:plan.filter((p)=>{
                return p.name!==name;
            })
        })
        PopUp.showMessage('warn','Planet Removed');
    }

    render(){
        return(
            <Fragment>
            <div id="layout">
                <Menu/>
                <div id="main">
                    <ToastContainer/>
                    <div className="header">
                        <h1>Star Wars Planets</h1>
                    </div>
                    <div className="content" id="content">
                        <div className="pure-form pure-form-aligned">
                            <PlanetForm submitListener={this.submitListener}/>     
                        </div>  
                        <div>            
                            <PlanetTable planets={this.state.planets} removeListItem={this.removeListItem}/>
                        </div>             
                    </div>
                </div>  
            </div>
        </Fragment>
        )
    }
}export default Planets;