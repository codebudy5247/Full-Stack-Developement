import axios from "axios";

export default axios.create({
  baseURL: "https://rapid-api5247.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
})