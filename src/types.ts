export type RequestParams = {
  integrationEndpoint: boolean;
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: RequestBody;
};

type RequestBody = {
  name: string;
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
