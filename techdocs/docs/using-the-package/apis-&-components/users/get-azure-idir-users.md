# getAzureIDIRUsers

The `getAzureIDIRUsers` function is used to get Azure IDIR users based on a query from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getAzureIDIRUsers } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getAzureIDIRUsers } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getAzureIDIRUsers` function.

```JavaScript
import { getAzureIDIRUsers } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getAzureIDIRUsers({ firstName: 'John' }));
})();
```

## TypeScript Type

```TypeScript
(query: IDIRUserQuery) => Promise<GetUsersWithRoleResponse>;
```

The type `IDIRUserQuery`:

!!! warning "Warning"
    At least one of the following properties are required.

```TypeScript
{
    firstName?: string;
    lastName?: string;
    email?: string;
    guid?: string;
}
```

### Response Type

The type `GetUsersWithRoleResponse` of `Promise<GetUsersWithRoleResponse>`:

```TypeScript
{
    data: UserResponse[];
}
```

The type `UserResponse`:

```TypeScript
{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    attributes: unknown;
}
```

## Parameters

An API reference for the parameters of the `getAzureIDIRUsers` function.

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
      <td>* query</td>
      <td>IDIRUserQuery</td>
      <td>-</td>
      <td>The user attributes to search for.</td>
    </tr>
  </tbody>
</table>
