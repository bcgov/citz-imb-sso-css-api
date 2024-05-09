# Quick Start Guide

Set up in 2 steps.

### 1. Import the Provided Functions

Add import for the function you need from the [Module Exports](../using-the-package/module-exports.md).

#### `Import Examples:`

```JavaScript
// ESModule import (preferred).
import { getIntegration } from '@bcgov/citz-imb-sso-css-api';

// CommonJS import.
const { getIntegration } = require('@bcgov/citz-imb-sso-css-api');
```

#### `Use Example:`

```JavaScript
import { getIntegration } from '@bcgov/citz-imb-sso-css-api';

// Log integration details.
console.log(await getIntegration());
```

<br />

### 2. Add Environment Variables

Add the required environment variables from the [Environment Variables](./environment-variables.md) section.
