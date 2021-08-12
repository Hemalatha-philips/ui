import axios from "axios";



export default axios.create({
  
  baseURL: `${process.env.REACT_APP_DEV_BASEURL}`,

  headers: {
    "Content-type": "application/json",
   
  }
});

