import apiUrl from "../../api_routes/api_url";
import axios from "axios";

function getAPICustomerId(id) {
  return axios.get(apiUrl() + "/customers/" + id).then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPICustomers;
