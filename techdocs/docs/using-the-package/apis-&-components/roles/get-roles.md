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

(async () => {
  console.log(await getRoles().data.map((role) => role.name));
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getRoles -->
```TypeScript
() => Promise<RolesArrayResponse>;
```

### Response Type

The type `RolesArrayResponse` of `Promise<RolesArrayResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RolesArrayResponse -->
```TypeScript
{
    data: RoleResponse[];
}
```

The type `RoleResponse`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: RoleResponse -->
```TypeScript
{
    name: string;
    composite: boolean;
}
```
