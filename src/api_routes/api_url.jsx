function apiUrl() { 
  let prod_url = "https://mundosat-backend-f7c2dccd1049.herokuapp.com/api/v1"
  let development_url = "http://localhost:3001/api/v1"

  if (process.env.NODE_ENV === 'production') {
    console.log("prod_url: ", prod_url) 
    return prod_url
  } else {
    console.log("development_url: ", development_url)
    return development_url
  }
}

export default apiUrl;
