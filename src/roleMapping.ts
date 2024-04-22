import {
  GetUsersWithRoleResponse,
  RequestBody,
  RolesArrayResponse,
  RolesArrayWithoutCompositeResponse,
} from './types';
import { request } from './utils/request';
import debug from './utils/debug';

/**
 * Get roles associated with a user.
 * @param {string} username - Username of the user to get roles from.
 * @returns {Promise<RolesArrayResponse>}
 * @example getUserRoles('fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir');
 */
export const getUserRoles = async (username: string): Promise<RolesArrayResponse> => {
  debug.functionCalled('getUserRoles');
  return await request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
  });
};

/**
 * Assign roles to a user.
 * @param {string} username - Username of the user to assign roles to.
 * @param {string[]} roleNames - Array of roles to assign.
 * @returns {Promise<RolesArrayWithoutCompositeResponse>}
 * @example assignUserRoles('fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir', 'admin');
 */
export const assignUserRoles = async (
  username: string,
  roleNames: string[],
): Promise<RolesArrayWithoutCompositeResponse> => {
  debug.functionCalled('assignUserRoles');
  return await request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
    method: 'POST',
    body:
      (roleNames.map((roleName) => ({
        name: roleName,
      })) as RequestBody) ?? [],
  });
};

/**
 * Get users associated with a role.
 * @param {string} roleName - The role name to search.
 * @param {number} [page] - Which page of results to query.
 * @param {number} [maxCount] - Max count of items per page.
 * @returns {Promise<GetUsersWithRoleResponse>}
 * @example getUsersWithRole('admin', 1, 10);
 */
export const getUsersWithRole = async (
  roleName: string,
  page?: number,
  maxCount?: number,
): Promise<GetUsersWithRoleResponse> => {
  debug.functionCalled('getUsersWithRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/users${
      page ? `?page=${page}${maxCount ? `&max=${maxCount}` : ''}` : ''
    }`,
  });
};

/**
 * Unassign a role from a user.
 * @param {string} username - User to unassign role from.
 * @param {string} roleName - Name of role to unassign.
 * @returns No Content.
 * @example unassignUserRole('fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir', 'admin');
 */
export const unassignUserRole = async (username: string, roleName: string) => {
  debug.functionCalled('unassignUserRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles/${roleName}`,
    method: 'DELETE',
  });
};
