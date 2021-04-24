import axios from "axios";
import Config from "../../config.json"

const deleteCandidate = id => new Promise((resolve, reject) => {
    axios.delete(`${Config.baseUrl}/${id}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
});

export default deleteCandidate