# getBasicBCeIDUser

The `getBasicBCeIDUser` function is used to get a Basic BCeID user from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getBasicBCeIDUser } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getBasicBCeIDUser } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getBasicBCeIDUser` function.

```JavaScript
import { getBasicBCeIDUser } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getBasicBCeIDUser('1r1zui4qr1yfh73k6rku5q30qupgcvdt'));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getBasicBCeIDUser -->
```TypeScript
(guid: string) => Promise<GetUsersWithRoleResponse>;
```

### Response Type

The type `GetUsersWithRoleResponse` of `Promise<GetUsersWithRoleResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: GetUsersWithRoleResponse -->
```TypeScript
{
    data: UserResponse[];
}
```

The type `UserResponse`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: UserResponse -->
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

An API reference for the parameters of the `getBasicBCeIDUser` function.

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
      <td>* guid</td>
      <td>string</td>
      <td>-</td>
      <td>The guid of the user to search for.</td>
    </tr>
  </tbody>
</table>
