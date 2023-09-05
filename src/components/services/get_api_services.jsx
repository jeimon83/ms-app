import apiUrl from "../../api_routes/api_url";
import axios from "axios";

function getAPIServices() {
  return axios.get(apiUrl() + "/services").then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPIServices;
