import { request } from './utils/request';
import debug from './utils/debug';
import { RoleResponse, RoleResponseWithoutComposite, RolesArrayResponse } from './types';

/**
 * Get all roles from integration.
 * @returns {Promise<RolesArrayResponse>}
 */
export const getRoles = async (): Promise<RolesArrayResponse> => {
  debug.functionCalled('getRoles');
  return await request({ integrationEndpoint: true, endpoint: 'roles' });
};

/**
 * Create a new role.
 * @param {string} roleName - The name of the new role.
 * @returns {Promise<RoleResponseWithoutComposite>}
 * @example createRole('admin');
 */
export const createRole = async (roleName: string): Promise<RoleResponseWithoutComposite> => {
  debug.functionCalled('createRole');
  return await request({
    integrationEndpoint: true,
    endpoint: 'roles',
    method: 'POST',
    body: { name: roleName },
  });
};

/**
 * Get role details.
 * @param {string} roleName - The name of the role to search.
 * @returns {Promise<RoleResponse>}
 * @example getRole('admin');
 */
export const getRole = async (roleName: string): Promise<RoleResponse> => {
  debug.functionCalled('getRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
  });
};

/**
 * Update a role name.
 * @param {string} roleName - The name of the role to update.
 * @param {string} newRoleName - The new name for the role.
 * @returns {Promise<RoleResponseWithoutComposite>}
 * @example updateRole('admin', 'superuser');
 */
export const updateRole = async (
  roleName: string,
  newRoleName: string,
): Promise<RoleResponseWithoutComposite> => {
  debug.functionCalled('updateRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: 'PUT',
    body: { name: newRoleName },
  });
};

/**
 * Remove a role.
 * @param {string} roleName - The name of the role to remove.
 * @returns No Content
 * @example deleteRole('admin');
 */
export const deleteRole = async (roleName: string) => {
  debug.functionCalled('deleteRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: 'DELETE',
  });
};

/**
 * Get a role's composites.
 * @param {string} roleName - The role in which to query it's composites.
 * @returns {Promise<RolesArrayResponse>}
 * @example getRoleComposites('admin');
 */
export const getRoleComposites = async (roleName: string): Promise<RolesArrayResponse> => {
  debug.functionCalled('getRoleComposites');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
  });
};

/**
 * Add a composite to a role.
 * @param {string} roleName - The role to add composites to.
 * @param {string} newCompositeRole - The name of the role to add as a composite.
 * @returns {Promise<RoleResponseWithoutComposite[]>}
 * @example addRoleComposite('admin', 'admin-dashboard');
 */
export const addRoleComposite = async (
  roleName: string,
  newCompositeRole: string,
): Promise<RoleResponseWithoutComposite[]> => {
  debug.functionCalled('addRoleComposite');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
    method: 'POST',
    body: { name: newCompositeRole },
  });
};

/**
 * Get details on a composite role from a role.
 * @param {string} roleName - The role name to query.
 * @param {string} compositeRoleName - The composite role in which to get details from.
 * @returns {Promise<RoleResponse>}
 * @example getRoleComposite('admin', 'admin-dashboard');
 */
export const getRoleComposite = async (
  roleName: string,
  compositeRoleName: string,
): Promise<RoleResponse> => {
  debug.functionCalled('getRoleComposite');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
  });
};

/**
 * Remove a composite role from a role.
 * @param {string} roleName - The role name of the role to remove the composite.
 * @param {string} compositeRoleName - The role name to remove as a composite.
 * @returns No Content
 * @example deleteRoleComposite('admin', 'admin-dashboard');
 */
export const deleteRoleComposite = async (roleName: string, compositeRoleName: string) => {
  debug.functionCalled('deleteRoleComposite');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
    method: 'DELETE',
  });
};
