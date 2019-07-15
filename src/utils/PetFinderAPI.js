import axios from "axios";
import { format, addSeconds, isAfter } from "date-fns";

const client = axios.create({
  baseURL: "https://api.petfinder.com/v2/",
  responseType: "json"
});

const isTokenRequired = true;

/*Intercepting requests*/
client.interceptors.request.use(
  request => requestHandler(request),
  requestErrorHandler
);

const requestHandler = request => {
  if (isTokenRequired) {
    const token = getAuthentication();

    if (token && isTokenNotExpired(token.expired_at)) {
      request.headers.Authorization = `Bearer ${token.access_token}`;
      return request;
    } else {
      return authenticate().then(response => {
        request.headers.Authorization = `Bearer ${response.access_token}`;
        return Promise.resolve(request);
      });
    }
  }
};

const requestErrorHandler = error => {
  return Promise.reject(error);
};

/*Intercepting responses*/
client.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

const responseSuccessHandler = response => {
  return response;
};

const responseErrorHandler = error => {
  return Promise.reject(error);
};
const authenticate = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("https://api.petfinder.com/v2/oauth2/token", {
        client_id: process.env.PET_FINDER_API_KEY,
        client_secret: process.env.PET_FINDER_API_SECRET,
        grant_type: "client_credentials"
      })
      .then(response => {
        setAuthentication(response.data);
        resolve(response.data);
      })
      .catch(error => reject(error));
  });
};

const setAuthentication = authentication => {
  let expired_at = format(
    addSeconds(new Date(), authentication.expires_in),
    "MM/DD/YYYY HH:mm:ss ZZ"
  );

  let pet_finder = {
    access_token: authentication.access_token,
    expired_at: expired_at,
    limit: authentication.expires_in
  };

  localStorage.setItem("pet_finder", JSON.stringify(pet_finder));
};

const getAuthentication = () => {
  const stringAuthentication = localStorage.getItem("pet_finder");
  if (stringAuthentication) {
    const authentication = JSON.parse(stringAuthentication);

    return authentication;
  } else {
    return false;
  }
};

const isTokenNotExpired = expiredAt => {
  return isAfter(new Date(), new Date(expiredAt));
};

/* API */
const getPets = () => {
  return client.get("animals");
};

export default {
  getPets: getPets()
};
