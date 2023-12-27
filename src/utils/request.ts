import { RequestParams } from "../types";
import { retreiveToken } from "./token";
import config from "../config";
const { SSO_INTEGRATION_ID, SSO_ENVIRONMENT, CSS_API_URL, DEBUG } = config;

export const request = async (params: RequestParams) => {
  try {
    const {
      integrationEndpoint = false,
      endpoint = "",
      method = "GET",
      body,
    } = params;

    // Get token.
    const access_token = await retreiveToken();
    if (!access_token)
      throw new Error("No access token provided by retrieveToken().");

    // Create headers.
    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };

    // Create request url.
    const integrationID = SSO_INTEGRATION_ID.replace(/^0+/, ""); // Trim leading zeros.
    const integration = `integrations/${integrationID}/`;
    const url = `${CSS_API_URL}/${
      integrationEndpoint && integration
    }${SSO_ENVIRONMENT}/${endpoint}`;

    // Fetch request.
    const response = await fetch(
      url,
      body
        ? {
            method,
            headers,
            body: JSON.stringify(body),
          }
        : {
            method,
            headers,
          }
    );

    // Log debug info.
    if (DEBUG && !response.ok) {
      const formattedResponse = {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        originalUrl: url,
        headers: response.headers,
      };
      console.log(
        `DEBUG: Request to ${endpoint} in 'citz-imb-kc-css-api': `,
        formattedResponse
      );
    }

    return await response.json();
  } catch (error) {
    // Something went wrong.
    console.error(
      `Error in 'citz-imb-kc-css-api' request. Endpoint: ${params.endpoint}.`,
      error
    );
  }
};
