# unassignUserRole

The `unassignUserRole` function is used to unassign a role from a user in your integration from Common Hosted Single Sign-on service. 

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { unassignUserRole } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { unassignUserRole } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `unassignUserRoles` function.

```JavaScript
import { unassignUserRole } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await unassignUserRole('fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir', 'Admin'));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: unassignUserRole -->
```TypeScript
(username: string, roleName: string) => Promise<void>;
```

## Parameters

An API reference for the parameters of the `unassignUserRole` function.

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
      <td>* username</td>
      <td>string</td>
      <td>-</td>
      <td>The preferred_username value of the user.</td>
    </tr>
    <tr>
      <td>* roleName</td>
      <td>string</td>
      <td>-</td>
      <td>The role name to unassign from the user.</td>
    </tr>
  </tbody>
</table>
