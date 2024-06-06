# TypeScript Types

These are the complete TypeScript types available within the package as they are in the bundled build.

For more in depth documentation on types, look at the `APIs & Components` pages.

<!-- DO NOT REMOVE THE FOLLOWING LINES. -->
<!-- This code block is auto generated when types in the package change. -->

<!-- TYPESCRIPT TYPES -->
```TypeScript
declare const getIntegration: () => Promise<GetIntegrationResponse>;

declare const getRoles: () => Promise<RolesArrayResponse>;
declare const createRole: (roleName: string) => Promise<RoleResponseWithoutComposite>;
declare const getRole: (roleName: string) => Promise<RoleResponse>;
declare const updateRole: (roleName: string, newRoleName: string) => Promise<RoleResponseWithoutComposite>;
declare const deleteRole: (roleName: string) => Promise<void>;
declare const getRoleComposites: (roleName: string) => Promise<RolesArrayResponse>;
declare const addRoleComposite: (roleName: string, newCompositeRole: string) => Promise<RoleResponseWithoutComposite[]>;
declare const getRoleComposite: (roleName: string, compositeRoleName: string) => Promise<RoleResponse>;
declare const deleteRoleComposite: (roleName: string, compositeRoleName: string) => Promise<void>;

declare const getUserRoles: (username: string) => Promise<RolesArrayResponse>;
declare const assignUserRoles: (username: string, roleNames: string[]) => Promise<RolesArrayWithoutCompositeResponse>;
declare const getUsersWithRole: (roleName: string, page?: number, maxCount?: number) => Promise<GetUsersWithRoleResponse>;
declare const unassignUserRole: (username: string, roleName: string) => Promise<void>;

declare const getIDIRUsers: (query: IDIRUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getAzureIDIRUsers: (query: IDIRUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getGitHubBCGovUsers: (query: GitHubUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getGitHubPublicUsers: (query: GitHubUserQuery) => Promise<GetUsersWithRoleResponse>;
declare const getBasicBCeIDUser: (guid: string) => Promise<GetUsersWithRoleResponse>;
declare const getBusinessBCeIDUser: (guid: string) => Promise<GetUsersWithRoleResponse>;
declare const getBothBCeIDUser: (guid: string) => Promise<GetUsersWithRoleResponse>;

type IDIRUserQuery = { // At least one property is required.
    firstName?: string;
    lastName?: string;
    email?: string;
    guid?: string;
};

type GitHubUserQuery = { // At least one property is required.
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
```
