import qs from "querystring";
import { RequestParams } from "../types";
import { retreiveToken } from "./token";
import config from "../config";
const { SSO_INTEGRATION_ID, SSO_ENVIRONMENT, CSS_API_URL } = config;

export const request = async (params: RequestParams) => {
  try {
    const {
      integrationEndpoint = false,
      endpoint = "",
      method = "GET",
      body,
    } = params;

    // Create headers.
    const headers = {
      Authorization: `Bearer ${retreiveToken()}`,
      "Content-Type": "application/json",
    };

    // Create request url.
    const integration = `integrations/${SSO_INTEGRATION_ID}/`;
    const url = `${CSS_API_URL}/${
      integrationEndpoint && integration
    }${SSO_ENVIRONMENT}/${endpoint}`;

    // Fetch request.
    const response = await fetch(url, {
      method,
      headers,
      body: qs.stringify(body),
    });
    return await response.json();
  } catch (error) {
    // Something went wrong.
    console.error(
      `Error in 'citz-imb-kc-css-api' request. Endpoint: ${params.endpoint}.`,
      error
    );
  }
};
