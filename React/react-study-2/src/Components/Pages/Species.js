import React,{Component,Fragment} from 'react';

import Menu from '../Menu';
import PopUp from '../../Utils/PopUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpeciesForm from '../Forms/SpecieForm';
import SpecieTable from '../Tables/SpecieTable';

class Species extends Component{
    constructor(props){
        super(props);
        this.state={
            species:[]
        }
    }

    componentDidMount(){
        fetch('https://swapi.co/api/species').then(res=>res.json()).then(res=>{
            this.setState({species:[...this.state.species,...res.results]})
        }).catch(err=>PopUp.showMessage('error','API Error, try again.'));
    }

    submitListener=specie=>{
        this.setState({species:[...this.state.species,specie]});
    }

    removeListItem=(name)=>{
        let specie = this.state.species;
        this.setState({species:specie.filter((n)=>{
            return n.name!==name
            })
        })
        PopUp.showMessage('warn','Specie removed');
    }

    render(){
        return(
            <Fragment>
                <div id="layout">
                    <Menu/>
                    <div id="main">
                        <ToastContainer/>
                        <div className="header">
                            <h1>Star Wars Species</h1>
                        </div>
                        <div className="content" id="content">
                            <div className="pure-form pure-form-aligned">
                                <SpeciesForm submitListener={this.submitListener}/>     
                            </div>  
                            <div>            
                                <SpecieTable species={this.state.species} removeListItem={this.removeListItem}/>
                            </div>             
                        </div>
                    </div>  
                </div>  
            </Fragment>
        );
    }
} export default Species;