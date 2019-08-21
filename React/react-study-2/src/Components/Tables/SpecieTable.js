import React, {Component } from 'react';

let THead=()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Height</th>
                <th>Lifespan</th>
                <th>Eye Color</th>
                <th>Hair Color</th>
                <th>Skin Color</th>
                <th>Language</th>
                <th>...</th>
            </tr>
        </thead>
    )
}

let TBody = props => {
    let lines=props.species.map((line,index)=>{
        return(
            <tr key={line.name}>
                <td>{line.name}</td>
                <td>{line.classification}</td>
                <td>{line.average_height}</td>
                <td>{line.average_lifespan}</td>
                <td>{line.eye_colors}</td>
                <td>{line.hair_colors}</td>
                <td>{line.skin_colors}</td>
                <td>{line.language}</td>
                <td><button className="button-error pure-button"onClick={()=>{ props.removeListItem(line.name) } }>Remove</button></td>
            </tr>
        );
    })

    return (<tbody>{lines}</tbody>)
}

class SpecieTable extends Component{
        render(){
            let{species,removeListItem}=this.props;
            return(
                <table className="pure-table pure-table-bordered defaultTableSize">
                    <THead/>
                    <TBody species={species} removeListItem={removeListItem}/>
                </table>
            )
        }
} export default SpecieTable