import apiUrl from "../../api_routes/api_url";
import axios from "axios";

function getAPICustomers() {
  return axios.get(apiUrl() + "/customers").then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPICustomers;
