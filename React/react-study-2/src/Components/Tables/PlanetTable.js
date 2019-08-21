import React, {Component} from 'react';

let THead=()=>{
    return(
        <thead className="highlight">
            <tr className="thFont thBorder">
                <th>Name</th>
                <th>Diameter</th>
                <th>Gravity</th>
                <th>Climate</th>
                <th>Orbital Period</th>
                <th>Rotation Period</th>
                <th>Population</th>
                <th>Surface Water</th>
                <th>Terrain</th>
                <th>...</th>
            </tr>
        </thead>
    )
}

let TBody=props=>{
    let lines = props.planets.map((line)=>{
        return(
            <tr key={line.name}>
                <td>{line.name}</td>
                <td>{line.diameter}</td>
                <td>{line.gravity}</td>
                <td>{line.climate}</td>
                <td>{line.orbital_period}</td>
                <td>{line.rotation_period}</td>
                <td>{line.population}</td>
                <td>{line.surface_water}</td>
                <td>{line.terrain}</td>
                <td> <button className="button-error pure-button button-large" onClick={()=>{ props.removeListItem(line.name) } }>Remove</button></td>
            </tr>
        )
    })

    return(<tbody>{lines}</tbody>)
}

class PlanetTable extends Component{
    render(){
        let{planets, removeListItem}=this.props;
        return(
            <table className="pure-table pure-table-bordered defaultTableSize">
            <THead/>
            <TBody planets={planets} removeListItem={removeListItem}/>
        </table>
        );
    }
}export default PlanetTable;