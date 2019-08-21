import React,{Component}from'react';

let TableHead=()=>{
    return(
        <thead>
            <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Eye Color</th>
            <th>Birht Year</th>
            <th>Gender</th>
            <th>...</th>
            </tr>
        </thead>
    );
    
}

let TableBody=(props)=>{
    let lines= props.list.map((line,index)=>{
        return(
            <tr key={index}>
            <td>{line.name}</td>
            <td>{line.height}</td>
            <td>{line.mass}</td>
            <td>{line.hair_color}</td>
            <td>{line.skin_color}</td>
            <td>{line.eye_color}</td>
            <td>{line.birth_year}</td>
            <td>{line.gender}</td>
            <td> 
              <button className="button-error pure-button button-large" onClick={()=>{ props.removeListItem(line.name) } }>Remove</button>
            </td>
          </tr>
        );
    })
    return(<tbody>
        {lines}
    </tbody>)
    
}
class Table extends Component{
    render(){
        let{list ,removeListItem}=this.props;
        return(
             <table className="pure-table pure-table-bordered pure-table-horizontal">
                 <TableHead/>
                 <TableBody list={list} removeListItem={removeListItem}/>
             </table>


        );
    }
}
export default Table;
