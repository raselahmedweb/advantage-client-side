// axiosRequest.js
import axios from "axios";

const apiReq = async ({ endPoint, method, data, CT }) => {
    return await axios({
      url: `https://advantage-server-side.onrender.com/${endPoint}`,
      method: method,
      data: data,
      headers: {
        "Content-Type": CT || "multipart/form-data",
      },
      withCredentials: true,
    });
  };
  

export default apiReq;