import qs from "querystring";
import config from "../config";
const { CSS_API_CLIENT_ID, CSS_API_CLIENT_SECRET, CSS_API_TOKEN_URL } = config;

// Retrieves a token from Keycloak
export const retreiveToken = async () => {
  const body = {
    client_id: CSS_API_CLIENT_ID,
    client_secret: CSS_API_CLIENT_SECRET,
    grant_type: "client_credentials",
  };

  const response = await fetch(CSS_API_TOKEN_URL, {
    method: "POST",
    body: qs.stringify(body),
  });

  const { access_token } = await response.json();
  return access_token;
};
