import debug from "./debug";

import config from "../config";
const { CSS_API_CLIENT_ID, CSS_API_CLIENT_SECRET, CSS_API_URL, PACKAGE_NAME } =
  config;

// Retrieves a token from SSO
export const retreiveToken = async () => {
  try {
    const body = {
      grant_type: "client_credentials",
    };

    const headers = {
      Authorization: `Basic ${btoa(
        `${CSS_API_CLIENT_ID}:${CSS_API_CLIENT_SECRET}`
      )}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const response = await fetch(`${CSS_API_URL}/token`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await response.text();
    const access_token = JSON.parse(data).access_token;

    // Log debug info for a bad response.
    debug.badTokenResponse(response);

    return access_token;
  } catch (error) {
    // Something went wrong.
    console.error(`Error in retrieveToken of '${PACKAGE_NAME}'.`, error);
  }
};
