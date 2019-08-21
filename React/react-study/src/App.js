import React, {Component, Fragment} from 'react';
import Table from './Table';
import 'materialize-css/dist/css/materialize.min.css';
import Form from './Form';
import Header from './Header'
import PopUp from './PopUp';
import APIService from './APIService';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      authors:[],
    };
  }

  submitListener = author=>{
    APIService.CreateAuthor(JSON.stringify(author))
          .then(res=>APIService.errorTreatment(res))
          .then(res=>{
             if(res.message==='success'){
                this.setState({authors:[...this.state.authors,res.data]});
                PopUp.showMessage('success','Author registered');
              }
            }
          ).catch(error=>PopUp.showMessage('error',`API error listing the authors. ${error}`))
  }

  removeAuthor=(id)=>{
    const {authors} = this.state;
    let updatedAuthors= authors.filter(aut=>{
        return aut.id !== id
    })
    // this.setState({
    //   // authors: authors.filter((au)=>{
    //   //   //if the clicked position is != of index, return, if is equal, dont return
    //   //   return au.id !== id;
    //   // })
    // });
    APIService.RemoveAuthor(id).then(res=>APIService.errorTreatment(res)).then(res=>{
      if(res.message==='deleted'){
        this.setState({authors:[...updatedAuthors]});
        PopUp.showMessage('remove','Author removed');
      }
    }).catch(error=>PopUp.showMessage('error',`API error listing the authors. ${error}`))
   

    
  }

  componentDidMount(){
    APIService.AutohersList()
      .then(res => APIService.errorTreatment(res))  
      .then(res=>{
        if(res.message==='success'){
            this.setState({authors:[...this.state.authors,res.data]});
            //console.log('aa', this.state.authors);
            PopUp.showMessage('success','Authors successfuly returned');
          }
        }
      )
      .catch(error=>PopUp.showMessage('error',`API error listing the authors. ${error}`))
  }

  render(){
    //fragment is a function from react that wrap the components whitout the need to use div
    //console.log(this.state.authors)
    return (
        <Fragment>
          <Header/>
          <div className="container">
            <h1>My Library</h1>
            <Form submitListener={this.submitListener}/>
            <Table autores={this.state.authors} removeAuthor={this.removeAuthor} />
          </div>
        </Fragment>
      );
  }
}

export default App;
