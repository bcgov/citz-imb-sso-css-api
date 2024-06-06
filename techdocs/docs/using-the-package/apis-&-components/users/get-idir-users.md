# getIDIRUsers

The `getIDIRUsers` function is used to get IDIR users based on a query from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getIDIRUsers } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getIDIRUsers } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getIDIRUsers` function.

```JavaScript
import { getIDIRUsers } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getIDIRUsers({ firstName: 'John' }));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getIDIRUsers -->
```TypeScript
const getIDIRUsers: (query: IDIRUserQuery) => Promise<GetUsersWithRoleResponse>;
```

The type `IDIRUserQuery`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: IDIRUserQuery -->
```TypeScript
type IDIRUserQuery = {
    firstName?: string;
    lastName?: string;
    email?: string;
    guid?: string;
}
```

!!! warning "Warning"
    At least one of the above properties is required.

### Response Type

The type `GetUsersWithRoleResponse` of `Promise<GetUsersWithRoleResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: GetUsersWithRoleResponse -->
```TypeScript
type GetUsersWithRoleResponse = {
    page?: number;
    data: UserResponse[];
}
```

The type `UserResponse`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: UserResponse -->
```TypeScript
type UserResponse = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    attributes: unknown;
}
```

## Parameters

An API reference for the parameters of the `getIDIRUsers` function.

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
      <td>* query</td>
      <td>IDIRUserQuery</td>
      <td>-</td>
      <td>The user attributes to search for.</td>
    </tr>
  </tbody>
</table>
