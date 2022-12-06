import axios from "axios";

export default axios.create({
    baseURL: "https://fakestoreapi.com/"
    // baseURL:"http://localhost:5000/api"
    // baseURL: "https://shop142.herokuapp.com/api"
})
