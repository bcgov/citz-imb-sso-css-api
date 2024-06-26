# deleteRole

The `deleteRole` function is used to create a new role in your integration from Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { deleteRole } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { deleteRole } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `deleteRole` function.

```JavaScript
import { deleteRole } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  await deleteRole('Admin');
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: deleteRole -->
```TypeScript
const deleteRole: (roleName: string) => Promise<any>;
```

## Parameters

An API reference for the parameters of the `deleteRole` function.

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
      <td>The name of the role to delete.</td>
    </tr>
  </tbody>
</table>
