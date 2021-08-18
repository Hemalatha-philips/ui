import axios from "axios";

const DEV_BASEURL = `http://localhost:3000/api`

export default axios.create({
  
  baseURL: `${DEV_BASEURL}`,

  headers: {
    "Content-type": "application/json",
   
  }
});

