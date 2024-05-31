# getRoleComposites

The `getRoleComposites` function is used to get composites of a role in your integration from Common Hosted Single Sign-on service. 

Composite roles are like "child" roles. They are set as composites of another role. An example is having a `Admin` role which has a composite role of `Level1` and `Level2` where each of these composite roles have their own permissions and can be used separately, but are both included as part of the `Admin` role.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getRoleComposites } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getRoleComposites } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getRoleComposites` function.

```JavaScript
import { getRoleComposites } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getRoleComposites('Admin'));
})();
```

## TypeScript Type

```TypeScript
(roleName: string) => Promise<RolesArrayResponse>;
```

### Response Type

The type `RolesArrayResponse` of `Promise<RolesArrayResponse>`:

```TypeScript
{
    data: RoleResponse[];
}
```

The type `RoleResponse`:

```TypeScript
{
    name: string;
    composite: boolean;
}
```

## Parameters

An API reference for the parameters of the `getRoleComposites` function.

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
      <td>* roleName</td>
      <td>string</td>
      <td>-</td>
      <td>The name of the role to get composites of.</td>
    </tr>
  </tbody>
</table>
