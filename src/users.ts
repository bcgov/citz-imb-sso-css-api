import qs from "querystring";
import { GitHubUserQuery, IDIRUserQuery } from "./types";
import { request } from "./utils/request";
import { logDebug } from "./utils/logDebug";
import config from "./config";
const { DEBUG } = config;

// getIDIRUsers - Get list of IDIR users by query.
export const getIDIRUsers = async (query?: IDIRUserQuery) => {
  if (DEBUG) logDebug("getIDIRUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getAzureIDIRUsers - Get list of Azure IDIR users by query.
export const getAzureIDIRUsers = async (query?: IDIRUserQuery) => {
  if (DEBUG) logDebug("getAzureIDIRUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `azure-idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getGitHubBCGovUsers - Get list of GitHub BCGov users by query.
export const getGitHubBCGovUsers = async (query?: GitHubUserQuery) => {
  if (DEBUG) logDebug("getGitHubBCGovUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `github-bcgov/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getGitHubPublicUsers - Get list of GitHub Public users by query.
export const getGitHubPublicUsers = async (query?: GitHubUserQuery) => {
  if (DEBUG) logDebug("getGitHubPublicUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `github-public/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getBasicBCeIDUser - Get Basic BCeID user by guid.
export const getBasicBCeIDUser = async (guid: string) => {
  if (DEBUG) logDebug("getBasicBCeIDUser");
  return await request({
    integrationEndpoint: false,
    endpoint: `basic-bceid/users?guid=${guid}`,
  });
};

// getBusinessBCeIDUser - Get Business BCeID user by guid.
export const getBusinessBCeIDUser = async (guid: string) => {
  if (DEBUG) logDebug("getBusinessBCeIDUser");
  return await request({
    integrationEndpoint: false,
    endpoint: `business-bceid/users?guid=${guid}`,
  });
};

// getBothBCeIDUser - Get Basic or Business BCeID user by guid.
export const getBothBCeIDUser = async (guid: string) => {
  if (DEBUG) logDebug("getBothBCeIDUser");
  return await request({
    integrationEndpoint: false,
    endpoint: `basic-business-bceid/users?guid=${guid}`,
  });
};
