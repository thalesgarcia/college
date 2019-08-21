import React , {Component} from 'react';

let TableHead=()=>{
    return (
        <thead>
            <tr>
            <th>Authors</th>
            <th>Books</th>
            <th>Price</th>
            <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha,index) => {
        return (
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => { props.removeAuthor(index) }} className="waves-effect orange darken-1 btn">Remove</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}
class Table extends Component{
    render() {
        const { autores, removeAuthor } = this.props;
        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores = { autores } removeAuthor = {removeAuthor}/>
            </table>
        );
    }
}export default Table