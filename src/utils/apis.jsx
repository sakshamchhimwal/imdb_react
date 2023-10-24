import axios from "axios";
import { BACKEND_URL } from "../constant/variables"



const getAllMovies = async (adult) => {
    const url = `${BACKEND_URL}titles`;
    const res = await axios.get(`${url}?adult=${adult}`);
    return res;
}


const getAllAction = async (adult) => {
    const url = `${BACKEND_URL}titles/genres?gen_list=Action&adult=${adult}`
    const res = await axios.get(url);
    return res;
}

const getAllPerson = async () => {
    const url = `${BACKEND_URL}allPeople/`
    const res = await axios.get(url);
    return res;
}



export {
    getAllMovies,
    getAllAction,
    getAllPerson
}