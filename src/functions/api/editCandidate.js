import axios from "axios";
import Config from "../../config.json"

const editCandidate = (body, id) => new Promise((resolve, reject) => {
    axios.put(`${Config.baseUrl}/${id}`, body)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
});

export default editCandidate