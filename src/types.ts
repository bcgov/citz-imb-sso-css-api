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
