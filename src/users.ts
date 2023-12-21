import qs from "querystring";
import { GitHubUserQuery, IDIRUserQuery } from "./types";
import { request } from "./utils/request";

export const getIDIRUsers = (query?: IDIRUserQuery) =>
  request({
    integrationEndpoint: false,
    endpoint: `idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });

export const getAzureIDIRUsers = (query?: IDIRUserQuery) =>
  request({
    integrationEndpoint: false,
    endpoint: `azure-idir/users${query ? `?${qs.stringify(query)}` : ""}`,
  });

export const getGitHubBCGovUsers = (query?: GitHubUserQuery) =>
  request({
    integrationEndpoint: false,
    endpoint: `github-bcgov/users${query ? `?${qs.stringify(query)}` : ""}`,
  });

export const getGitHubPublicUsers = (query?: GitHubUserQuery) =>
  request({
    integrationEndpoint: false,
    endpoint: `github-public/users${query ? `?${qs.stringify(query)}` : ""}`,
  });

export const getBasicBCeIDUser = (guid: string) =>
  request({
    integrationEndpoint: false,
    endpoint: `basic-bceid/users?guid=${guid}`,
  });

export const getBusinessBCeIDUser = (guid: string) =>
  request({
    integrationEndpoint: false,
    endpoint: `business-bceid/users?guid=${guid}`,
  });

export const getBothBCeIDUser = (guid: string) =>
  request({
    integrationEndpoint: false,
    endpoint: `basic-business-bceid/users?guid=${guid}`,
  });
