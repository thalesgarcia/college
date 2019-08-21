import React,{Component,Fragment} from 'react';

import Menu from '../Menu';
import StarshipTable from '../Tables/StarshipTable';
import StarshipForm from '../Forms/StarShipForm';
import PopUp from '../../Utils/PopUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Starships extends Component{
    constructor(props){
        super(props);
        this.state={
            ships:[]
        }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/starships').then(res=>res.json()).then(resp=>{
            this.setState({ships:[...this.state.ships,...resp.results]});
            console.log(this.state);
        }).catch(err=>PopUp.showMessage('error','API error, try again'))
    }
    submitListener= list => {
        this.setState({ ships: [...this.state.ships, list] });
    }
 
    removeListItem=(name)=>{
        let ship = this.state.ships;
        this.setState({
            ships: ship.filter((li)=>{
            return li.name !== name;
            })
        });
        PopUp.showMessage('warn','Starship removed');
    }
    render(){
        return (
        <Fragment>
            <div id="layout">
                <Menu/>
                <div id="main">
                    <ToastContainer/>
                    <div className="header">
                        <h1>Star Wars Ships</h1>
                    </div>
                    <div className="content" id="content">
                        <div className="pure-form pure-form-aligned">
                            <StarshipForm submitListener={this.submitListener}/>     
                        </div>  
                        <div>            
                            <StarshipTable ships={this.state.ships} removeListItem={this.removeListItem}/>
                        </div>             
                    </div>
                </div>  
            </div>
        </Fragment>
        );
    }
}
export default Starships;