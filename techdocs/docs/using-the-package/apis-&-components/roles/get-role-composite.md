# getRoleComposite

The `getRoleComposite` function is used to get a details about a composite role to another role in your integration from Common Hosted Single Sign-on service. 

Composite roles are like "child" roles. They are set as composites of another role. An example is having a `Admin` role which has a composite role of `Level1` and `Level2` where each of these composite roles have their own permissions and can be used separately, but are both included as part of the `Admin` role.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getRoleComposite } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getRoleComposite } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getRoleComposite` function.

```JavaScript
import { getRoleComposite } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getRoleComposite('Admin', 'Level3'));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getRoleComposite -->
```TypeScript
(roleName: string, compositeRoleName: string) => Promise<RoleResponse>
```

### Response Type

The type `RoleResponse` of `Promise<RoleResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RoleResponse -->
```TypeScript
{
    name: string;
    composite: boolean;
}
```

## Parameters

An API reference for the parameters of the `getRoleComposite` function.

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
      <td>The name of the composite role.</td>
    </tr>
  </tbody>
</table>
