import { RequestBody } from "./types";
import { request } from "./utils/request";
import config from "./config";
const { DEBUG } = config;

// getUserRoles - Get roles associated with a user.
export const getUserRoles = (username: string) => {
  if (DEBUG)
    console.log(
      "DEBUG: getUserRoles function in `citz-imb-kc-css-api` called."
    );
  request({ integrationEndpoint: true, endpoint: `users/${username}/roles` });
};

// assignUserRoles - Assign roles to a user.
export const assignUserRoles = (username: string, roleNames: string[]) => {
  if (DEBUG)
    console.log(
      "DEBUG: assignUserRoles function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles`,
    method: "POST",
    body:
      (roleNames.map((roleName) => {
        name: roleName;
      }) as RequestBody) ?? [],
  });
};

// getUsersWithRole - Get users associated with a role.
export const getUsersWithRole = (
  roleName: string,
  page?: number,
  count?: number
) => {
  if (DEBUG)
    console.log(
      "DEBUG: getUsersWithRole function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/users${
      page ? `?page=${page}${count ? `&count=${count}` : ""}` : ""
    }`,
  });
};

// unassignUserRole - Unassign a role from a user.
export const unassignUserRole = (username: string, roleName: string) => {
  if (DEBUG)
    console.log(
      "DEBUG: unassignUserRole function in `citz-imb-kc-css-api` called."
    );
  request({
    integrationEndpoint: true,
    endpoint: `users/${username}/roles/${roleName}`,
    method: "DELETE",
  });
};
