import qs from "querystring";
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

    // Create headers.
    const access_token = await retreiveToken();
    const headers = {
      Authorization: `Bearer ${access_token}`,
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
            body: qs.stringify(body),
          }
        : {
            method,
            headers,
          }
    );

    // Log debug info.
    if (DEBUG && !response.ok)
      console.log(
        `DEBUG: Request to ${endpoint} in 'citz-imb-kc-css-api': `,
        response
      );

    return await response.json();
  } catch (error) {
    // Something went wrong.
    console.error(
      `Error in 'citz-imb-kc-css-api' request. Endpoint: ${params.endpoint}.`,
      error
    );
  }
};
