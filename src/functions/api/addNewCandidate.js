import axios from "axios";
import Config from "../../config.json"

const addNewCandidate = () => new Promise((resolve, reject) => {
    axios.post(`${Config.baseUrl}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
});

export default addNewCandidate