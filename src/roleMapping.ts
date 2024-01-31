import { RequestBody } from "./types";
import { request } from "./utils/request";
import { logDebug } from "./utils/logDebug";
import config from "./config";
const { DEBUG } = config;

// getUserRoles - Get roles associated with a user.
export const getUserRoles = async (username: string) => {
  if (DEBUG) logDebug("getUserRoles");
  return await request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
  });
};

// assignUserRoles - Assign roles to a user.
export const assignUserRoles = async (
  username: string,
  roleNames: string[]
) => {
  if (DEBUG) logDebug("assignUserRoles");
  return await request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
    method: "POST",
    body:
      (roleNames.map((roleName) => ({
        name: roleName,
      })) as RequestBody) ?? [],
  });
};

// getUsersWithRole - Get users associated with a role.
export const getUsersWithRole = async (
  roleName: string,
  page?: number,
  maxCount?: number
) => {
  if (DEBUG) logDebug("getUsersWithRole");
  return await request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/users${
      page ? `?page=${page}${maxCount ? `&max=${maxCount}` : ""}` : ""
    }`,
  });
};

// unassignUserRole - Unassign a role from a user.
export const unassignUserRole = async (username: string, roleName: string) => {
  if (DEBUG) logDebug("unassignUserRole");
  return await request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles/${roleName}`,
    method: "DELETE",
  });
};
