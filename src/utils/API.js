import axios from "axios";

const client = axios.create({
  //baseURL: "http://hn.algolia.com/api/v1/search?query=redux",
  responseType: "json"
});

// if (localStorage.getItem("pet_finder")) {
//   const auth = JSON.parse(localStorage.getItem("pet_finder"));
// }

client.interceptors.request.use(function(config) {
  const rawAuth = localStorage.getItem("pet_finder");

  if (rawAuth) {
    const auth = JSON.parse(rawAuth);
    config.headers["Authorization"] = `Bearer ${auth.access_token}`;
  }

  return config;
}),
  function(error) {
    return Promise.reject(error);
  };

export default {
  getAuthenticated() {
    client
      .post("https://api.petfinder.com/v2/oauth2/token", {
        client_id: "KA9P2FXpp12JWykZgIiedKudGGx1FfB1iU7m2nt5AxRekq9wgs",
        client_secret: "auxCXUAWJvy8MgNvZVmBXhGE3jYgzOs2HvYdJwbA",
        grant_type: "client_credentials"
      })
      .then(response => {
        //console.log(response.data);
        localStorage.setItem("pet_finder", JSON.stringify(response.data));
      });
  },
  getAnimals() {
    return client.get("https://api.petfinder.com/v2/animals/?limit=15");
  }
};
