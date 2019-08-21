import React, {Component, Fragment} from 'react';

const TableHead=props=>{
    let linhas = props.head.map((linha,index)=>{
        return(
            <td>{linha.name}</td>
        );
    })
    return(<tr>{linhas}</tr>)

}

class DinamicTable extends Component{
   

    render(){
        let {head, body}=this.props;
        return(
            <table className="centered">
                <TableHead head={head}/>
            </table>
        );
    }
} export default DinamicTable