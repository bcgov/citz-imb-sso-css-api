import { request } from "./utils/request";

export const getUserRoles = (username: string) =>
  request({ integrationEndpoint: true, endpoint: `users/${username}/roles` });

export const assignUserRole = (username: string, roleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
    method: "POST",
    body: { name: roleName },
  });

export const getUsersWithRole = (roleName: string) =>
  request({ integrationEndpoint: true, endpoint: `roles/${roleName}/users` });

export const unassignUserRole = (username: string, roleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles/${roleName}`,
    method: "DELETE",
  });
