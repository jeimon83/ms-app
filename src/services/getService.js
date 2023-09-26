import apiUrl from "../api_routes/api_url";

async function fetchServices() {
  const response = await fetch(apiUrl() + '/services');
 if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
}

export { fetchServices };