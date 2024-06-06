# updateRole

The `updateRole` function is used to update a role name from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { updateRole } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { updateRole } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `updateRole` function.

```JavaScript
import { updateRole } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await updateRole('Admin', 'Superuser'));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: updateRole -->
```TypeScript
const updateRole: (roleName: string, newRoleName: string) => Promise<RoleResponseWithoutComposite>;
```

### Response Type

The type `RoleResponseWithoutComposite` of `Promise<RoleResponseWithoutComposite>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RoleResponseWithoutComposite -->
```TypeScript
type RoleResponseWithoutComposite = {
    name: string;
}
```

## Parameters

An API reference for the parameters of the `updateRole` function.

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
      <td>The name of the role to update.</td>
    </tr>
    <tr>
      <td>* newRoleName</td>
      <td>string</td>
      <td>-</td>
      <td>The new name for the role.</td>
    </tr>
  </tbody>
</table>
