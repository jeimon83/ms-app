import apiUrl from "../../api_routes/api_url";
import axios from "../../axios-config"

function getAPIServiceId(id) {
  return axios.get(apiUrl() + "/services/" + id).then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPIServiceId;
