# getUsersWithRole

The `getUsersWithRole` function is used to find users with a specific role in your integration from Common Hosted Single Sign-on service. 

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getUsersWithRole } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getUsersWithRole } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getUsersWithRole` function.

```JavaScript
import { getUsersWithRole } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getUsersWithRole('Admin'));
})();
```

## TypeScript Type

```TypeScript
(roleName: string, page?: number, maxCount?: number) => Promise<GetUsersWithRoleResponse>;
```

### Response Type

The type `GetUsersWithRoleResponse` of `Promise<GetUsersWithRoleResponse>`:

```TypeScript
{
    page?: number;
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

An API reference for the parameters of the `getUsersWithRole` function.

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
      <td>* roleName</td>
      <td>string</td>
      <td>-</td>
      <td>The role name to query.</td>
    </tr>
    <tr>
      <td>page</td>
      <td>number</td>
      <td>1</td>
      <td>The page of data to query.</td>
    </tr>
    <tr>
      <td>maxCount</td>
      <td>number</td>
      <td>50</td>
      <td>The max count of items per page.</td>
    </tr>
  </tbody>
</table>
