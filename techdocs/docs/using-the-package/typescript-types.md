# TypeScript Types

These are the complete TypeScript types available within the package as they are in the bundled build.

For more in depth documentation on types, look at the `APIs & Components` pages.

<!-- DO NOT REMOVE THE FOLLOWING LINES. -->
<!-- This code block is auto generated when types in the package change. -->

<!-- TYPESCRIPT TYPES -->
```TypeScript
import { RoleResponse as RoleResponse$1, RoleResponseWithoutComposite as RoleResponseWithoutComposite$1 } from '@/types';

type RequestRoleObject = {
    name: string;
};
type RequestBody = RequestRoleObject | RequestRoleObject[] | [];
type RequestParams = {
    integrationEndpoint?: boolean;
    environmentEndpoint?: boolean;
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: RequestBody;
};
type IDIRUserQuery = {
    firstName?: string;
    lastName?: string;
    email?: string;
    guid?: string;
};
type GitHubUserQuery = {
    name?: string;
    login?: string;
    email?: string;
    guid?: string;
};
type RoleResponse = {
    name: string;
    composite: boolean;
};
type RoleResponseWithoutComposite = {
    name: string;
};
type RolesArrayResponse = {
    data: RoleResponse[];
};
type RolesArrayWithoutCompositeResponse = {
    data: RoleResponseWithoutComposite[];
};
type UserResponse = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    attributes: unknown;
};
type GetUsersWithRoleResponse = {
    page?: number;
    data: UserResponse[];
};
type GetIntegrationResponse = {
    id: number;
    projectName: string;
    authType: string;
    environments: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};

declare const getIntegration: () => Promise<GetIntegrationResponse>;

declare const getRoles: () => Promise<RolesArrayResponse>;
declare const createRole: (roleName: string) => Promise<RoleResponseWithoutComposite>;
declare const getRole: (roleName: string) => Promise<RoleResponse>;
declare const updateRole: (roleName: string, newRoleName: string) => Promise<RoleResponseWithoutComposite>;
declare const deleteRole: (roleName: string) => Promise<any>;
declare const getRoleComposites: (roleName: string) => Promise<RolesArrayResponse>;
declare const addRoleComposite: (roleName: string, newCompositeRole: string) => Promise<RoleResponseWithoutComposite[]>;
declare const getRoleComposite: (roleName: string, compositeRoleName: string) => Promise<RoleResponse>;
declare const deleteRoleComposite: (roleName: string, compositeRoleName: string) => Promise<any>;

declare const getUserRoles: (username: string) => Promise<RolesArrayResponse>;
declare const assignUserRoles: (username: string, roleNames: string[]) => Promise<RolesArrayWithoutCompositeResponse>;
declare const getUsersWithRole: (roleName: string, page?: number, maxCount?: number) => Promise<GetUsersWithRoleResponse>;
declare const unassignUserRole: (username: string, roleName: string) => Promise<any>;

declare const getIDIRUsers: (query: IDIRUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getAzureIDIRUsers: (query: IDIRUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getGitHubBCGovUsers: (query: GitHubUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getGitHubPublicUsers: (query: GitHubUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getBasicBCeIDUser: (guid: string) => Promise<GetUsersWithRoleResponse>;
declare const getBusinessBCeIDUser: (guid: string) => Promise<GetUsersWithRoleResponse>;
declare const getBothBCeIDUser: (guid: string) => Promise<GetUsersWithRoleResponse>;

declare const checkForUpdates: () => Promise<void>;

declare const _default: {
    functionCalled: (funcName: string) => void;
    requestCompleted: (endpoint: string, status: number) => void;
    badResponse: (endpoint: string, response: any) => void;
    badTokenResponse: (response: any) => void;
};

declare namespace debug_d {
  export { _default as default };
}

declare const request: (params: RequestParams) => Promise<any>;

declare const mockGetIntegrationResponse: {
    id: number;
    projectName: string;
    authType: string;
    environments: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};
declare const mockRoleResponse: (name: string, composite: boolean) => {
    name: string;
    composite: boolean;
};
declare const mockRoleResponseWithoutComposite: (name: string) => {
    name: string;
};
declare const mockRolesArrayResponse: (roleResponses: RoleResponse$1[]) => {
    data: RoleResponse$1[];
};
declare const mockRolesArrayWithoutCompositeResponse: (roleResponses: RoleResponseWithoutComposite$1[]) => {
    data: RoleResponseWithoutComposite$1[];
};
declare const mockGetUsersWithRoleResponse: {
    page: number;
    data: {
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        attributes: {};
    };
};

declare const retrieveToken: () => Promise<any>;

declare const mockUsername = "fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir";
declare const mockGuid = "fohe4m5pn8clhkxmlho33sn1r7vr7m67";
declare const mockIDIRUserQuery: {
    firstName: string;
    lastName: string;
    email: string;
    guid: string;
};
declare const mockGitHubUserQuery: {
    name: string;
    login: string;
    email: string;
    guid: string;
};

export { type GetIntegrationResponse, type GetUsersWithRoleResponse, type GitHubUserQuery, type IDIRUserQuery, type RequestBody, type RequestParams, type RoleResponse, type RoleResponseWithoutComposite, type RolesArrayResponse, type RolesArrayWithoutCompositeResponse, type UserResponse, addRoleComposite, assignUserRoles, checkForUpdates, createRole, debug_d as debug, deleteRole, deleteRoleComposite, getAzureIDIRUsers, getBasicBCeIDUser, getBothBCeIDUser, getBusinessBCeIDUser, getGitHubBCGovUsers, getGitHubPublicUsers, getIDIRUsers, getIntegration, getRole, getRoleComposite, getRoleComposites, getRoles, getUserRoles, getUsersWithRole, mockGetIntegrationResponse, mockGetUsersWithRoleResponse, mockGitHubUserQuery, mockGuid, mockIDIRUserQuery, mockRoleResponse, mockRoleResponseWithoutComposite, mockRolesArrayResponse, mockRolesArrayWithoutCompositeResponse, mockUsername, request, retrieveToken, unassignUserRole, updateRole };
```
