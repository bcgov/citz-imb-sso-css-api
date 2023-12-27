import config from "../config";
const { CSS_API_CLIENT_ID, CSS_API_CLIENT_SECRET, CSS_API_URL, DEBUG } = config;

// Retrieves a token from Keycloak
export const retreiveToken = async () => {
  try {
    const body = {
      grant_type: "client_credentials",
    };

    console.log(
      `CSS_API_CLIENT_ID ${CSS_API_CLIENT_ID}, CSS_API_CLIENT_SECRET ${CSS_API_CLIENT_SECRET}`
    );

    const headers = {
      Authorization: `Basic ${btoa(
        `${CSS_API_CLIENT_ID}:${CSS_API_CLIENT_SECRET}`
      )}`,
      Accept: "application/json",
    };

    console.log(`Authorization: ${headers.Authorization}`);

    const response = await fetch(`${CSS_API_URL}/token`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const { access_token } = await response.json();

    // Log debug info.
    if (DEBUG && !response.ok) {
      const formattedResponse = {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        headers: JSON.stringify(response.headers),
      };
      console.log(
        `DEBUG: retreiveToken in 'citz-imb-kc-css-api': `,
        formattedResponse
      );
    }

    return access_token;
  } catch (error) {
    // Something went wrong.
    console.log(`Error in retrieveToken of 'citz-imb-kc-css-api'.`, error);
  }
};
