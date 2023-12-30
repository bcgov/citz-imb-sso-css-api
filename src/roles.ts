import { request } from "./utils/request";
import config from "./config";
const { DEBUG } = config;

// getRoles - Get all roles from integration.
export const getRoles = () => {
  if (DEBUG)
    console.log("DEBUG: getRoles function in `citz-imb-kc-css-api` called.");
  request({ integrationEndpoint: true, endpoint: "roles" });
};

// createRole - Create a new role.
export const createRole = (roleName: string) => {
  if (DEBUG)
    console.log("DEBUG: createRole function in `citz-imb-kc-css-api` called.");
  request({
    integrationEndpoint: true,
    endpoint: "roles",
    method: "POST",
    body: { name: roleName },
  });
};

// getRole - Get role details.
export const getRole = (roleName: string) => {
  if (DEBUG)
    console.log("DEBUG: getRole function in `citz-imb-kc-css-api` called.");
  request({ integrationEndpoint: true, endpoint: `roles/${roleName}` });
};

// updateRole - Update a role name.
export const updateRole = (roleName: string, newRoleName: string) => {
  if (DEBUG)
    console.log("DEBUG: updateRole function in `citz-imb-kc-css-api` called.");
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: "PUT",
    body: { name: newRoleName },
  });
};

// deleteRole - Remove a role.
export const deleteRole = (roleName: string) => {
  if (DEBUG)
    console.log("DEBUG: deleteRole function in `citz-imb-kc-css-api` called.");
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: "DELETE",
  });
};

// getRoleComposites - Get a role's composites.
export const getRoleComposites = (roleName: string) => {
  if (DEBUG)
    console.log(
      "DEBUG: getRoleComposites function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
  });
};

// addRoleComposite - Add a composite to a role.
export const addRoleComposite = (
  roleName: string,
  newCompositeRole: string
) => {
  if (DEBUG)
    console.log(
      "DEBUG: addRoleComposite function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
    method: "POST",
    body: { name: newCompositeRole },
  });
};

// getRoleComposite - Get a composite role from a role.
export const getRoleComposite = (
  roleName: string,
  compositeRoleName: string
) => {
  if (DEBUG)
    console.log(
      "DEBUG: getRoleComposite function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
  });
};

// deleteRoleComposite - Remove a composite role from a role.
export const deleteRoleComposite = (
  roleName: string,
  compositeRoleName: string
) => {
  if (DEBUG)
    console.log(
      "DEBUG: deleteRoleComposite function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
    method: "DELETE",
  });
};
