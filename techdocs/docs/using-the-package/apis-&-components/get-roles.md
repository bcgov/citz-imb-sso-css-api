# getRoles

The `getRoles` function is used to get role details from your integration in Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getRoles } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getRoles } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getRoles` function to get an array of role names.

```JavaScript
import { getRoles } from "@bcgov/citz-imb-sso-css-api";

export const getRoleList = async () => {
  const roles = await getRoles();
  return roles.data.map((role) => role.name);
}
```

## TypeScript Type

```TypeScript
() => Promise<RolesArrayResponse>;
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
