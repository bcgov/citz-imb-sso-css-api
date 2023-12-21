import qs from "querystring";
import config from "../config";
const { CSS_API_CLIENT_ID, CSS_API_CLIENT_SECRET, CSS_API_URL } = config;

// Retrieves a token from Keycloak
export const retreiveToken = async () => {
  const body = {
    grant_type: "client_credentials",
  };

  const basicAuth = `Basic ${Buffer.from(
    CSS_API_CLIENT_ID + ":" + CSS_API_CLIENT_SECRET
  ).toString("base64")}`;

  const response = await fetch(`${CSS_API_URL}/token`, {
    method: "POST",
    headers: { Authorization: basicAuth },
    body: qs.stringify(body),
  });

  const { access_token } = await response.json();
  return access_token;
};
