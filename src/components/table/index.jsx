import "./styles.css"
import TableRow from "./tableRow"
import shortid from "shortid"

const Table = ({ headers, data, deleteRow, saveRow }) => {
    return(
        <table>
            <thead><tr>{headers.map(header => <th key={shortid.generate()}>{header}</th>)}</tr></thead>
            {data.map(((row, i) => <TableRow key={shortid.generate()} row={row} deleteRow={() => deleteRow(i)} saveRow={(rowData) => saveRow(rowData, i)}/>))}
        </table>
    )
}

export default Table