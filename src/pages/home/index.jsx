import "./styles.css"
import { Wrapper, Table, Button } from "../../components"
import { useEffect, useState } from "react"
import { addNewCandidate, editCandidate, deleteCandidate, getCandidatesList } from "../../functions/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const rowHeaders = require("../../data/rowHeaders.json")


const Home = () => {

    useEffect(() => getData(), [])

    const [data, setData] = useState([])

    const getData = () => {
        getCandidatesList()
        .then(res => setData(res))
        .catch(err => console.log(err))
    }

    const notify = err => toast(err);

    const validateBody = body => {
        const re = /\S+@\S+\.\S+/
        if(body.name === "") {
            return { error : true, errorMessage : "Name cannot be empty!" }
        }
        if(body.email === "") {
            return { error : true, errorMessage : "Email cannot be empty!" }
        }
        if(!re.test(body.email)) {
            return { error : true, errorMessage : "Inavlid Email!" }
        }
        if(body.interview_transcription === "") {
            return { error : true, errorMessage : "Transcription cannot be empty!" }
        }
        if(body.action_result === "Email sent") {
            return { error : true, errorMessage : "Email already sent!" }
        }
        return { error : false }
    }

    const rowActions = {
        new : () => {
            addNewCandidate()
            .then(res => setData(res))
            .catch(err => console.log(err))
        },
        delete : i => {
            deleteCandidate(data[i].rowId)
            .then(res => {
                setData(res)
                notify("Cadidate entry removed")
            })
            .catch(err => console.log(err))
        },
        save :  (body, i) => {
            let bodyValidation = validateBody(body)
            bodyValidation.error ?
                notify(bodyValidation.errorMessage)
                :
                editCandidate(body, data[i].rowId)
                .then(res => {
                    notify("Cadidate data saved")
                    body.move_forward === "yes" && notify("Email sent")
                    setData(res)
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <Wrapper>
            <ToastContainer />
            <Table headers={rowHeaders} data={data} deleteRow={i => rowActions.delete(i)} saveRow={(rowData, i) => rowActions.save(rowData, i)}/>
            <Button icon="plus" text="Add candidate" onClick={() => rowActions.new()}/>
        </Wrapper>
    )
}   

export default Home