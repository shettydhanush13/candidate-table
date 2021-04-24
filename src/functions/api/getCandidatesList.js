import axios from "axios";
import Config from "../../config.json"

const getCandidatesList = () => new Promise((resolve, reject) => {
    axios.get(`${Config.baseUrl}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
});

export default getCandidatesList