# getRole

The `getRole` function is used to get role details from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getRole } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getRole } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getRole` function.

```JavaScript
import { getRole } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getRole('Admin'));
})();
```

## TypeScript Type

```TypeScript
(roleName: string) => Promise<RoleResponse>;
```

### Response Type

The type `RoleResponse` of `Promise<RoleResponse>`:

```TypeScript
{
    name: string;
    composite: boolean;
}
```

## Parameters

An API reference for the parameters of the `getRole` function.

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
      <td>The name of the role to get.</td>
    </tr>
  </tbody>
</table>
