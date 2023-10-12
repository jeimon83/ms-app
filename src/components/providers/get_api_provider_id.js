import apiUrl from "../../api_routes/api_url";
import axios from "../../axios-config"

function getAPIProviderId(id) {
  return axios.get(apiUrl() + "/providers/" + id).then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPIProviderId;
