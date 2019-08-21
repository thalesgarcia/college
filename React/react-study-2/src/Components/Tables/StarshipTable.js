import React, {Component} from 'react';

let THead=()=>{
    return(
        <thead className="highlight">
            <tr className="thFont thBorder">
                <th>Name</th>
                <th>Model</th>
                <th>Class</th>
                <th>Manufacturer</th>
                <th>Cost</th>
                <th>Lenght</th>
                <th>Crew</th>
                <th>Passengers</th>
                <th>Max Atmosphering Speed</th>
                <th>Hyperdrive Rating</th>
                <th>MGLT</th>
                <th>Cargo Capacity</th>
                <th>Consumables(months)</th>
                <th>...</th>
            </tr>
        </thead>
    )
}

let TBody= props=>{
    let lines = props.ships.map((line,index)=>{
        
        return(
            <tr key={line.name}>
                <td>{line.name}</td>
                <td>{line.model}</td>
                <td>{line.starship_class}</td>
                <td>{line.manufacturer}</td>
                <td>{line.cost_in_credits}</td>
                <td>{line.length}</td>
                <td>{line.crew}</td>
                <td>{line.passengers}</td>
                <td>{line.max_atmosphering_speed}</td>
                <td>{line.hyperdrive_rating}</td>
                <td>{line.MGLT}</td>
                <td>{line.cargo_capacity}</td>
                <td>{line.consumables}</td>
                <td> 
              <button className="button-error pure-button button-large" onClick={()=>{ props.removeListItem(line.name) } }>Remove</button>
            </td>
            </tr>
        )
    })

    return(<tbody>{lines}</tbody>)
}

class StarshipTable extends Component{
   render(){
    let {ships,removeListItem}=this.props;
    return(
        <table className="pure-table pure-table-bordered defaultTableSize">
            <THead/>
            <TBody ships={ships} removeListItem={removeListItem}/>
        </table>
    )
   }

} export default StarshipTable;