import qs from "querystring";
import { GitHubUserQuery, IDIRUserQuery } from "./types";
import { request } from "./utils/request";
import debug from "./utils/debug";

// getIDIRUsers - Get list of IDIR users by query.
export const getIDIRUsers = async (query: IDIRUserQuery) => {
  debug.functionCalled("getIDIRUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getAzureIDIRUsers - Get list of Azure IDIR users by query.
export const getAzureIDIRUsers = async (query: IDIRUserQuery) => {
  debug.functionCalled("getAzureIDIRUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `azure-idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getGitHubBCGovUsers - Get list of GitHub BCGov users by query.
export const getGitHubBCGovUsers = async (query: GitHubUserQuery) => {
  debug.functionCalled("getGitHubBCGovUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `github-bcgov/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getGitHubPublicUsers - Get list of GitHub Public users by query.
export const getGitHubPublicUsers = async (query: GitHubUserQuery) => {
  debug.functionCalled("getGitHubPublicUsers");
  return await request({
    integrationEndpoint: false,
    endpoint: `github-public/users${query ? `?${qs.stringify(query)}` : ""}`,
  });
};

// getBasicBCeIDUser - Get Basic BCeID user by guid.
export const getBasicBCeIDUser = async (guid: string) => {
  debug.functionCalled("getBasicBCeIDUser");
  return await request({
    integrationEndpoint: false,
    endpoint: `basic-bceid/users?guid=${guid}`,
  });
};

// getBusinessBCeIDUser - Get Business BCeID user by guid.
export const getBusinessBCeIDUser = async (guid: string) => {
  debug.functionCalled("getBusinessBCeIDUser");
  return await request({
    integrationEndpoint: false,
    endpoint: `business-bceid/users?guid=${guid}`,
  });
};

// getBothBCeIDUser - Get Basic or Business BCeID user by guid.
export const getBothBCeIDUser = async (guid: string) => {
  debug.functionCalled("getBothBCeIDUser");
  return await request({
    integrationEndpoint: false,
    endpoint: `basic-business-bceid/users?guid=${guid}`,
  });
};
