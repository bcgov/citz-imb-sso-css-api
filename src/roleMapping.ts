import { RequestBody } from "./types";
import { request } from "./utils/request";

export const getUserRoles = (username: string) =>
  request({ integrationEndpoint: true, endpoint: `users/${username}/roles` });

export const assignUserRoles = (username: string, roleNames: string[]) =>
  request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
    method: "POST",
    body:
      (roleNames.map((roleName) => {
        name: roleName;
      }) as RequestBody) ?? [],
  });

export const getUsersWithRole = (
  roleName: string,
  page?: number,
  count?: number
) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/users${
      page ? `?page=${page}${count ? `&count=${count}` : ""}` : ""
    }`,
  });

export const unassignUserRole = (username: string, roleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles/${roleName}`,
    method: "DELETE",
  });
