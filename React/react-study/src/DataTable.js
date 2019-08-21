import React from 'react';

let DataTable = props =>{
    let lines = props.dados.map((item,index)=>
        <tr key={index}>
            {props.columns.map(col=>
            <td key={`${item.id}${item[col]}`}>
                {item[col]}
            </td>
            )}
        </tr>
    );

    return(
        <table className="centered">
            <thead>
                <tr>
                    <th>
                        {props.title}
                    </th>
                </tr>
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>
    )
}
export default DataTable;