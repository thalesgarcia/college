import React ,{ Fragment, Component } from 'react';
import Header from './Header';
import DataTable from './DataTable'
import APIService from './APIService'
import PopUp from './PopUp';
class Authors extends Component{
    constructor(props){
        super(props);
        this.state={
            nomes:[],
            title:'Authors'
        }
    }

    componentDidMount(){
        APIService.ListNames()
        .then(res=>APIService.errorTreatment(res))
        .then(res=>{
            if(res.message==='success'){
                this.setState({
                    nomes:[...this.state.nomes,...res.data]
                })
            }
        }).catch(error=>PopUp.showMessage('error',`API ERROR. Couldnt get the author list. ${error}`))
    }

    render(){
       
        return(
            <Fragment>
                <Header/>
                <div className="container">
                    <h1>Authors</h1>
                    <DataTable dados={this.state.nomes} title={this.state.title} columns={['nome']}/>
                </div>
            </Fragment>
        );
    }
    
}
export default Authors;