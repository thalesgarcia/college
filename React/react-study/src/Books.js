import React ,{ Fragment,Component } from 'react';
import Header from './Header';
import DataTable from './DataTable'
import APIService from './APIService'
import PopUp from './PopUp';

class Books extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[ ],
            title:'Books'
        }
    }

    componentDidMount(){
        APIService.ListBooks()
        .then(res=>APIService.errorTreatment(res))
        .then(res=>{
            if(res.message==='success'){
                this.setState({
                    books:[...this.state.books,...res.data]
                })  
            }
        }).catch(error=>PopUp.showMessage('error','API ERROR. Couldnt get the book list'));
    }
    render(){
       
        return(
            <Fragment>
                <Header/>
                <div className="container">
                    <h1>Books</h1>
                    <DataTable dados={this.state.books} title={this.state.title} columns={['livro']}/>
                </div>
            </Fragment>
        );
    }
}
export default Books;