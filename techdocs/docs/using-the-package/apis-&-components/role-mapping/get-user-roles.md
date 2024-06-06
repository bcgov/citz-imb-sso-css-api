# getUserRoles

The `getUserRoles` function is used to get all roles associated with a user in your integration from Common Hosted Single Sign-on service. 

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getUserRoles } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getUserRoles } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getUserRoles` function.

```JavaScript
import { getUserRoles } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getUserRoles('fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir'));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getUserRoles -->
```TypeScript
(username: string) => Promise<RolesArrayResponse>;
```

### Response Type

The type `RolesArrayResponse` of `Promise<RolesArrayResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RolesArrayResponse -->
```TypeScript
{
    data: RoleResponse[];
}
```

The type `RoleResponse`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RoleResponse -->
```TypeScript
{
    name: string;
    composite: boolean;
}
```

## Parameters

An API reference for the parameters of the `getUserRoles` function.

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
  </tbody>
</table>
