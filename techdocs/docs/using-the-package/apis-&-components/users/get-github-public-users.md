# getGitHubPublicUsers

The `getGitHubPublicUsers` function is used to get GitHub users based on a query from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getGitHubPublicUsers } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getGitHubPublicUsers } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getGitHubPublicUsers` function.

```JavaScript
import { getGitHubPublicUsers } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getGitHubPublicUsers({ name: 'JohnDoe' }));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getGitHubPublicUsers -->
```TypeScript
const getGitHubPublicUsers: (query: GitHubUserQuery) => Promise<GetUsersWithRoleResponse>;
```

The type `GitHubUserQuery`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: GitHubUserQuery -->
```TypeScript
type GitHubUserQuery = {
    name?: string;
    login?: string;
    email?: string;
    guid?: string;
}
```

!!! warning "Warning"
    At least one of the above properties is required.

### Response Type

The type `GetUsersWithRoleResponse` of `Promise<GetUsersWithRoleResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: GetUsersWithRoleResponse -->
```TypeScript
type GetUsersWithRoleResponse = {
    page?: number;
    data: UserResponse[];
}
```

The type `UserResponse`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: UserResponse -->
```TypeScript
type UserResponse = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    attributes: unknown;
}
```

## Parameters

An API reference for the parameters of the `getGitHubPublicUsers` function.

!!! note "Note"
    The Name column starting with `*` means the parameter is required.

<table>
  <!-- Table columns -->
  <thead>
    <tr>
      <th style="background: #6f19d9; color: white;">Name</th>
      <th style="background: #6f19d9; color: white;">Type</th>
      <th style="background: #6f19d9; color: white;">Default</th>
      <th style="background: #6f19d9; color: white;">Description</th>
    </tr>
  </thead>

  <!-- Table rows -->
  <tbody>
    <tr>
      <td>* query</td>
      <td>GitHubUserQuery</td>
      <td>-</td>
      <td>The user attributes to search for.</td>
    </tr>
  </tbody>
</table>
