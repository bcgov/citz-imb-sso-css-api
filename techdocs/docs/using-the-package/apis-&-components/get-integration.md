# getIntegration

The `getIntegration` function is used to get details about your integration from Common Hosted Single Sign-on service.

!!! warning "Reminder"
    This function is asynchronous and must be awaited in order to get a response.

## Import

```JavaScript
// ESModule Syntax (preferred)
import { getIntegration } from "@bcgov/citz-imb-sso-css-api";

// CommonJS Syntax
const { getIntegration } = require('@bcgov/citz-imb-sso-css-api');
```

## Usage

A basic example of using the `getIntegration` function.

```JavaScript
import { getIntegration } from "@bcgov/citz-imb-sso-css-api";

(async () => {
  console.log(await getIntegration().projectName);
})();
```

## TypeScript Type

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: getIntegration -->
```TypeScript
const getIntegration: () => Promise<GetIntegrationResponse>;
```

### Response Type

The type `GetIntegrationResponse` of `Promise<GetIntegrationResponse>`:

<!-- The following code block is auto generated when types in the package change. -->
<!-- TYPE: GetIntegrationResponse -->
```TypeScript
type GetIntegrationResponse = {
    id: number;
    projectName: string;
    authType: string;
    environments: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
```
