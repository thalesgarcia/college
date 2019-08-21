import React, {Component } from 'react';

let Thead=()=>{
   return( 
    <thead>
        <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
            <th>Manufacturer</th>
            <th>Size</th>
            <th>Cost</th>
            <th>Crew</th>
            <th>Passengers</th>
            <th>Max Speed</th>
            <th>Cargo Capacity</th>
            <th>...</th>
        </tr>
    </thead>
   );
}

let Tbody=props=>{
    let lines = props.vehicles.map((line,index)=>{
        return(
            <tr key={line.name }>
                <td>{line.name}</td>
                <td>{line.model}</td>
                <td>{line.vehicle_class}</td>
                <td>{line.manufacturer}</td>
                <td>{line.lenght}</td>
                <td>{line.cost_in_credits }</td>
                <td>{line.crew}</td>
                <td>{line.passengers }</td>
                <td>{line.max_atmosphering_speed }</td>
                <td>{line.cargo_capacity }</td>
                <td><button className="button-error pure-button button-large" onClick={()=>{ props.removeListItem(line.name) } }>Remove</button></td>
            </tr>
        )
    })
    return(<tbody>{lines}</tbody>)
}

class VehicleTable extends Component{
    render(){
        let{vehicles,removeListItem}=this.props;
        return(
            <table className="pure-table pure-table-bordered pure-table-striped defaultTableSize">
                <Thead/>
                <Tbody vehicles={vehicles} removeListItem={removeListItem}/>
            </table>
        )
    }
}
export default VehicleTable