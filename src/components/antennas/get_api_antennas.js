import apiUrl from "../../api_routes/api_url";
import axios from "../../axios-config"

function getAPIAntennas() {
  return axios.get(apiUrl() + "/antennas").then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPIAntennas;
