import "./styles.css"
import Button from "../button"
import { useState } from "react"

const TableRow = ({ row, deleteRow, saveRow }) => {

    const [name, setName] = useState(row.name)
    const [email, setEmail] = useState(row.email)
    const [appointment_date, setAppointment] = useState(row.appointment_date)
    const [move_forward, setForward] = useState(row.move_forward)
    const [interview_transcription, setTranscription] = useState(row.interview_transcription)

    const rowData = {
        name,
        email,
        appointment_date,
        move_forward,
        interview_transcription,
        action_result : row.action_result
    }

    return(
        <tbody>
            <tr>
                <td><input type="text" defaultValue={name} onChange={e => setName(e.target.value)}/></td>
                <td><input type="email" defaultValue={email} onChange={e => setEmail(e.target.value)}/></td>
                <td><input name="dateSelect" min={new Date().toISOString().split('T')[0]} type="date" defaultValue={appointment_date.split("T")[0]} onChange={e => setAppointment(e.target.value)}/></td>
                <td>
                    <select name="forward" id="forward" defaultValue={move_forward} onChange={e => setForward(e.target.value)}>
                        <option value="no">no</option>
                        <option value="yes">yes</option>
                    </select>
                </td>
                <td><input type="text" defaultValue={interview_transcription} onChange={e => setTranscription(e.target.value)}/></td>
                <td><span className="action_result">{row.action_result}</span></td>
                <td>
                    <Button icon="save" text="Save" onClick={() => saveRow(rowData)}/>
                    <Button icon="close" text="Remove candidate" onClick={() => deleteRow()}/>
                </td>
            </tr>  
        </tbody> 
    )
}

export default TableRow