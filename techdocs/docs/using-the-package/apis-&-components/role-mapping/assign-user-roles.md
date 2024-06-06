# assignUserRoles

The `assignUserRoles` function is used to assign roles to a user in your integration from Common Hosted Single Sign-on service. 

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { assignUserRoles } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { assignUserRoles } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `assignUserRoles` function.

```JavaScript
import { assignUserRoles } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await assignUserRoles('fohe4m5pn8clhkxmlho33sn1r7vr7m67@idir', ['Admin']));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: assignUserRoles -->
```TypeScript
const assignUserRoles: (username: string, roleNames: string[]) => Promise<RolesArrayWithoutCompositeResponse>;
```

### Response Type

The type `RolesArrayWithoutCompositeResponse` of `Promise<RolesArrayWithoutCompositeResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RolesArrayWithoutCompositeResponse -->
```TypeScript
type RolesArrayWithoutCompositeResponse = {
    data: RoleResponseWithoutComposite[];
}
```

The type `RoleResponseWithoutComposite`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RoleResponseWithoutComposite -->
```TypeScript
type RoleResponseWithoutComposite = {
    name: string;
}
```

## Parameters

An API reference for the parameters of the `assignUserRoles` function.

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
      <td>* roleNames</td>
      <td>string[]</td>
      <td>-</td>
      <td>The role names to assign to the user.</td>
    </tr>
  </tbody>
</table>
