/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../config';
const { DEBUG, VERBOSE_DEBUG, PACKAGE_NAME } = config;

const functionCalled = (funcName: string) => {
  if (DEBUG) console.log(`DEBUG: ${funcName} function in '${PACKAGE_NAME}' called.`);
};

const requestCompleted = (endpoint: string, status: number) => {
  if (DEBUG)
    console.log(
      `DEBUG: Request to ${endpoint} in '${PACKAGE_NAME}' completed with status ${status}`,
    );
};

const badResponse = (endpoint: string, response: any) => {
  if (DEBUG && VERBOSE_DEBUG && !response.ok) {
    const formattedResponse = {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      headers: JSON.stringify(response.headers),
    };
    console.log(`DEBUG: Request to ${endpoint} in '${PACKAGE_NAME}': `, formattedResponse);
  }
};

const badTokenResponse = (response: any) => {
  if (DEBUG && VERBOSE_DEBUG && !response.ok) {
    const formattedResponse = {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      headers: JSON.stringify(response.headers),
    };
    console.log(`DEBUG: retreiveToken in '${PACKAGE_NAME}': `, formattedResponse);
  }
};

export default {
  functionCalled,
  requestCompleted,
  badResponse,
  badTokenResponse,
};
