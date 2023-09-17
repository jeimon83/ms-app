import apiUrl from "../../api_routes/api_url";
import axios from "axios";

function getAPIAntennaId(id) {
  return axios.get(apiUrl() + "/antennas/" + id).then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPIAntennaId;
