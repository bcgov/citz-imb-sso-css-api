type RequestRoleObject = {
  name: string;
};

export type RequestBody = RequestRoleObject | RequestRoleObject[] | [];

export type RequestParams = {
  integrationEndpoint?: boolean;
  environmentEndpoint?: boolean;
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: RequestBody;
};

export type IDIRUserQuery = {
  firstName?: string;
  lastName?: string;
  email?: string;
  guid?: string;
};

export type GitHubUserQuery = {
  name?: string;
  login?: string; // Username
  email?: string;
  guid?: string;
};

export type RoleResponse = {
  name: string;
  composite: boolean;
};

export type RoleResponseWithoutComposite = {
  name: string;
};

export type RolesArrayResponse = {
  data: RoleResponse[];
};

export type RolesArrayWithoutCompositeResponse = {
  data: RoleResponseWithoutComposite[];
};

export type UserResponse = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  attributes: unknown;
};

export type GetUsersWithRoleResponse = {
  page?: number;
  data: UserResponse[];
};

export type GetIntegrationResponse = {
  id: number;
  projectName: string;
  authType: string;
  environments: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};
