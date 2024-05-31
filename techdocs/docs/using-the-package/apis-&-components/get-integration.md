# getIntegration

The `getIntegration` function is used to get details about your integration from CSS.

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

export const getProjectName = async () => {
  const integration = await getIntegration();
  return integration.projectName;
}
```

## TypeScript Type

```TypeScript
() => Promise<GetIntegrationResponse>;
```

### Response Type

```TypeScript
{
    id: number;
    projectName: string;
    authType: string;
    environments: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
```
