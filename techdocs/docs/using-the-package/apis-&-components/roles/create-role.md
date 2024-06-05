# createRole

The `createRole` function is used to create a new role in your integration from Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { createRole } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { createRole } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `createRole` function.

```JavaScript
import { createRole } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  await createRole('Admin');
})();
```

## TypeScript Type

```TypeScript
(roleName: string) => Promise<RoleResponseWithoutComposite>;
```

### Response Type

The type `RoleResponseWithoutComposite` of `Promise<RoleResponseWithoutComposite>`:

```TypeScript
{
    name: string;
}
```

## Parameters

An API reference for the parameters of the `createRole` function.

!!! note "Note"
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
      <td>The name of the role to create.</td>
    </tr>
  </tbody>
</table>
