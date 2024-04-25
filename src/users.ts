import qs from 'querystring';
import { GetUsersWithRoleResponse, GitHubUserQuery, IDIRUserQuery } from './types';
import { request } from './utils/request';
import debug from './utils/debug';

/**
 * Get list of IDIR users by query.
 * @param {IDIRUserQuery} query - User details to search for.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getIDIRUsers({ firstName: 'Joe' });
 */
export const getIDIRUsers = async (query: IDIRUserQuery): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getIDIRUsers');
  return await request({
    integrationEndpoint: false,
    endpoint: `idir/users?${qs.stringify(query)}`,
  });
};

/**
 * Get list of Azure IDIR users by query.
 * @param {IDIRUserQuery} query - User details to search for.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getAzureIDIRUsers({ firstName: 'Joe' });
 */
export const getAzureIDIRUsers = async (
  query: IDIRUserQuery,
): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getAzureIDIRUsers');
  return await request({
    integrationEndpoint: false,
    endpoint: `azure-idir/users?${qs.stringify(query)}`,
  });
};

/**
 * Get list of GitHub BCGov users by query.
 * @param {GitHubUserQuery} query - User details to search for.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getGitHubBCGovUsers({ login: 'JoeGatto' });
 */
export const getGitHubBCGovUsers = async (
  query: GitHubUserQuery,
): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getGitHubBCGovUsers');
  return await request({
    integrationEndpoint: false,
    endpoint: `github-bcgov/users?${qs.stringify(query)}`,
  });
};

/**
 * Get list of GitHub Public users by query.
 * @param {GitHubUserQuery} query - User details to search for.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getGitHubPublicUsers({ login: 'JoeGatto' });
 */
export const getGitHubPublicUsers = async (
  query: GitHubUserQuery,
): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getGitHubPublicUsers');
  return await request({
    integrationEndpoint: false,
    endpoint: `github-public/users?${qs.stringify(query)}`,
  });
};

/**
 * Get Basic BCeID user by guid.
 * @param {string} guid - User identifier.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getBasicBCeIDUser('1r1zui4qr1yfh73k6rku5q30qupgcvdt');
 */
export const getBasicBCeIDUser = async (guid: string): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getBasicBCeIDUser');
  return await request({
    integrationEndpoint: false,
    endpoint: `basic-bceid/users?guid=${guid}`,
  });
};

/**
 * Get Business BCeID user by guid.
 * @param {string} guid - User identifier.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getBusinessBCeIDUser('1r1zui4qr1yfh73k6rku5q30qupgcvdt');
 */
export const getBusinessBCeIDUser = async (guid: string): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getBusinessBCeIDUser');
  return await request({
    integrationEndpoint: false,
    endpoint: `business-bceid/users?guid=${guid}`,
  });
};

/**
 * Get Both BCeID user by guid.
 * @param {string} guid - User identifier.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getBothBCeIDUser('1r1zui4qr1yfh73k6rku5q30qupgcvdt');
 */
export const getBothBCeIDUser = async (guid: string): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getBothBCeIDUser');
  return await request({
    integrationEndpoint: false,
    endpoint: `basic-business-bceid/users?guid=${guid}`,
  });
};
