import qs from "querystring";
import { GitHubUserQuery, IDIRUserQuery } from "./types";
import { request } from "./utils/request";
import config from "./config";
const { DEBUG } = config;

// getIDIRUsers - Get list of IDIR users by query.
export const getIDIRUsers = (query?: IDIRUserQuery) => {
  if (DEBUG)
    console.log(
      "DEBUG: getIDIRUsers function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getAzureIDIRUsers - Get list of Azure IDIR users by query.
export const getAzureIDIRUsers = (query?: IDIRUserQuery) => {
  if (DEBUG)
    console.log(
      "DEBUG: getAzureIDIRUsers function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `azure-idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getGitHubBCGovUsers - Get list of GitHub BCGov users by query.
export const getGitHubBCGovUsers = (query?: GitHubUserQuery) => {
  if (DEBUG)
    console.log(
      "DEBUG: getGitHubBCGovUsers function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `github-bcgov/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getGitHubPublicUsers - Get list of GitHub Public users by query.
export const getGitHubPublicUsers = (query?: GitHubUserQuery) => {
  if (DEBUG)
    console.log(
      "DEBUG: getGitHubPublicUsers function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `github-public/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getBasicBCeIDUser - Get Basic BCeID user by guid.
export const getBasicBCeIDUser = (guid: string) => {
  if (DEBUG)
    console.log(
      "DEBUG: getBasicBCeIDUser function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `basic-bceid/users?guid=${guid}`,
  });
};

// getBusinessBCeIDUser - Get Business BCeID user by guid.
export const getBusinessBCeIDUser = (guid: string) => {
  if (DEBUG)
    console.log(
      "DEBUG: getBusinessBCeIDUser function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `business-bceid/users?guid=${guid}`,
  });
};

// getBothBCeIDUser - Get Basic or Business BCeID user by guid.
export const getBothBCeIDUser = (guid: string) => {
  if (DEBUG)
    console.log(
      "DEBUG: getBothBCeIDUser function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: false,
    endpoint: `basic-business-bceid/users?guid=${guid}`,
  });
};
