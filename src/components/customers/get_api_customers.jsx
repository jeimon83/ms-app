import apiUrl from "../../api_routes/api_url";
import axios from "axios";

function getAPICustomers() {
  return axios.get("https://mundosat-backend-f7c2dccd1049.herokuapp.com/api/v1/customers").then((response) => response.data)
  .catch((error) => {
    console.error("Error fetching data: ", error);
    return [];
  });
}

export default getAPICustomers;
