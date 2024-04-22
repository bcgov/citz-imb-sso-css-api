import { RequestParams } from '../types';
import { retreiveToken } from './token';
import debug from './debug';

import config from '../config';
const { SSO_INTEGRATION_ID, SSO_ENVIRONMENT, CSS_API_URL, PACKAGE_NAME } = config;

export const request = async (params: RequestParams) => {
  try {
    const {
      integrationEndpoint = false,
      environmentEndpoint = true,
      endpoint = '',
      method = 'GET',
      body,
    } = params;

    // Get token.
    const access_token = await retreiveToken();
    if (!access_token) throw new Error('No access token provided by retrieveToken().');

    // Create headers.
    const headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Create request url.
    const integration = `integrations/${SSO_INTEGRATION_ID}/`;
    const url = `${CSS_API_URL}/${integrationEndpoint ? integration : ''}${
      environmentEndpoint ? `${SSO_ENVIRONMENT}/` : ''
    }${endpoint}`;

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
          },
    );

    // Log debug info for a bad response or completed request.
    debug.badResponse(endpoint, response);
    debug.requestCompleted(endpoint, response.status);

    // Return json if 200 or 201 reponse, otherwise return text.
    if ([200, 201].includes(response.status)) return await response.json();
    return await response.text();
  } catch (error) {
    // Something went wrong.
    console.error(`Error in '${PACKAGE_NAME}' request. Endpoint: ${params.endpoint}.`, error);
  }
};
