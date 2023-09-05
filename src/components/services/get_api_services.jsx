import apiUrl from "../../api_routes/api_url";
import axios from "axios";

function getAPIServices() {
  return axios.get("https://mundosat-backend-f7c2dccd1049.herokuapp.com/api/v1/services").then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPIServices;
