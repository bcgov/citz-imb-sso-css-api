import { request } from './utils/request';
import debug from './utils/debug';

// getRoles - Get all roles from integration.
export const getRoles = async () => {
  debug.functionCalled('getRoles');
  return await request({ integrationEndpoint: true, endpoint: 'roles' });
};

// createRole - Create a new role.
export const createRole = async (roleName: string) => {
  debug.functionCalled('createRole');
  return await request({
    integrationEndpoint: true,
    endpoint: 'roles',
    method: 'POST',
    body: { name: roleName },
  });
};

// getRole - Get role details.
export const getRole = async (roleName: string) => {
  debug.functionCalled('getRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
  });
};

// updateRole - Update a role name.
export const updateRole = async (roleName: string, newRoleName: string) => {
  debug.functionCalled('updateRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: 'PUT',
    body: { name: newRoleName },
  });
};

// deleteRole - Remove a role.
export const deleteRole = async (roleName: string) => {
  debug.functionCalled('deleteRole');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: 'DELETE',
  });
};

// getRoleComposites - Get a role's composites.
export const getRoleComposites = async (roleName: string) => {
  debug.functionCalled('getRoleComposites');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
  });
};

// addRoleComposite - Add a composite to a role.
export const addRoleComposite = async (roleName: string, newCompositeRole: string) => {
  debug.functionCalled('addRoleComposite');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
    method: 'POST',
    body: { name: newCompositeRole },
  });
};

// getRoleComposite - Get a composite role from a role.
export const getRoleComposite = async (roleName: string, compositeRoleName: string) => {
  debug.functionCalled('getRoleComposite');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
  });
};

// deleteRoleComposite - Remove a composite role from a role.
export const deleteRoleComposite = async (roleName: string, compositeRoleName: string) => {
  debug.functionCalled('deleteRoleComposite');
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
    method: 'DELETE',
  });
};
