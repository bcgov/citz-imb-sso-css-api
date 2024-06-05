# deleteRoleComposite

The `deleteRoleComposite` function is used to remove a composite role from another role in your integration from Common Hosted Single Sign-on service. 

Composite roles are like "child" roles. They are set as composites of another role. An example is having a `Admin` role which has a composite role of `Level1` and `Level2` where each of these composite roles have their own permissions and can be used separately, but are both included as part of the `Admin` role.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { deleteRoleComposite } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { deleteRoleComposite } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `deleteRoleComposite` function.

```JavaScript
import { deleteRoleComposite } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await deleteRoleComposite('Admin', 'Level3'));
})();
```

## TypeScript Type

```TypeScript
(roleName: string, compositeRoleName: string) => Promise<void>
```

## Parameters

An API reference for the parameters of the `deleteRoleComposite` function.

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
      <td>The name of the role with the composite.</td>
    </tr>
    <tr>
      <td>* compositeRoleName</td>
      <td>string</td>
      <td>-</td>
      <td>The name of the composite role to remove.</td>
    </tr>
  </tbody>
</table>
