import { request } from "./utils/request";

export const getRoles = () =>
  request({ integrationEndpoint: true, endpoint: "roles" });

export const createRole = (roleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: "roles",
    method: "POST",
    body: { name: roleName },
  });

export const getRole = (roleName: string) =>
  request({ integrationEndpoint: true, endpoint: `roles/${roleName}` });

export const updateRole = (roleName: string, newRoleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: "PUT",
    body: { name: newRoleName },
  });

export const deleteRole = (roleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}`,
    method: "DELETE",
  });

export const getRoleComposites = (roleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
  });

export const addRoleComposite = (roleName: string, newCompositeRole: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles`,
    method: "POST",
    body: { name: newCompositeRole },
  });

export const getRoleComposite = (roleName: string, compositeRoleName: string) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
  });

export const deleteRoleComposite = (
  roleName: string,
  compositeRoleName: string
) =>
  request({
    integrationEndpoint: true,
    endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
    method: "DELETE",
  });
