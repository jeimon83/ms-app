function apiUrl() { 
  if (process.env.NODE_ENV === 'production') {
    return "https://mundosat-backend-f7c2dccd1049.herokuapp.com/api/v1"
  } else {
    return "http://localhost:3000/api/v1"
  }
}

export default apiUrl;
