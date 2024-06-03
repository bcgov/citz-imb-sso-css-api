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

```TypeScript
(query: GitHubUserQuery) => Promise<GetUsersWithRoleResponse>;
```

The type `GitHubUserQuery`:

* At least one property is required.

```TypeScript
{
    name?: string;
    login?: string;
    email?: string;
    guid?: string;
}
```

### Response Type

The type `GetUsersWithRoleResponse` of `Promise<GetUsersWithRoleResponse>`:

```TypeScript
{
    data: UserResponse[];
}
```

The type `UserResponse`:

```TypeScript
{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    attributes: unknown;
}
```

## Parameters

An API reference for the parameters of the `getGitHubPublicUsers` function.

The Name column starting with `*` means the prop is required.

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
