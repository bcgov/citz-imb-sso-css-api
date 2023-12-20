# BCGov CSS SSO API Integration as Addon to citz-imb-kc-express Package

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](Redirect-URL)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

[![NodeJS](https://img.shields.io/badge/Node.js_20-43853D?style=for-the-badge&logo=node.js&logoColor=white)](NodeJS)
[![Typescript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](Typescript)

<br />

<details>
<summary><h2>TL/DR</h2></summary>

1. Install package by following the steps at [Installing the Package](#installing-the-package).
2. Set up the package by following the steps at [Basic Setup Guide](#basic-setup-guide).
3. For use with [@bcgov/citz-imb-kc-express].
4. Allows easy use of the [BCGov Keycloak CSS SSO API] in a nodejs application.

**What is this package for?** - [Click Here](#use-this-package-to:)

</details>

---

## Table of Contents

- [General Information](#general-information)
- [Installing the Package](#installing-the-package) - **Start Here!**
- [Basic Setup Guide](#basic-setup-guide) - Setting up after installing.
- [Environment Variables](#environment-variables) - Required variables for initialization.
- [Module Exports](#module-exports) - Functions and Types available from the module.
- [TypeScript Types](#typescript-types) - Available TypeScript types.
- [Applications using this Solution](#applications-using-this-solution) - See an example of how to use.

## General Information

- For running on a NodeJS:20 API.
- For Keycloak Gold Standard.
- Works with Vanilla JavaScript or Typescript 5.
- For use with [@bcgov/citz-imb-kc-express]
- Allows for easy use of [BCGov Keycloak CSS SSO API] in a nodejs application.

### Use this package to:

- Check, add, or remove roles from a Keycloak user in your Keycloak Integration.
- Add, update, read, or remove roles from your Keycloak Integration.
- Get a list of users in your Keycloak Integration based on a query.

---

<br />

## Installing the Package

1. Add the following line to your `package.json`:

``` JSON5
{
  "dependencies": {
    "@bcgov/citz-imb-kc-css-api": "https://github.com/bcgov/citz-imb-kc-css-api/releases/download/v<VERSION>/bcgov-citz-imb-kc-css-api-<VERSION>.tgz",
    // The rest of your dependencies...
  },
}
```

2. Replace `<VERSION>` with the version you wish to use. Reference [releases] for version numbers.

<br />

3. Run `npm install` to add the package.

[Return to Top](#bcgov-css-sso-api-integration-as-addon-to-citz-imb-kc-express-package)

<br />

## Basic Setup Guide

1. TBD.

*Example:*

```JavaScript

```

2. Add the required environment variables from the [Environment Variables](#environment-variables) section below.

[Return to Top](#bcgov-css-sso-api-integration-as-addon-to-citz-imb-kc-express-package)

<br />

## Environment Variables

```ENV
# Ensure the following environment variables are defined on the container.

CSS_API_CLIENT_ID= # Keycloak CSS API Service Account client_id
CSS_API_CLIENT_SECRET= # Keycloak CSS API Service Account client_secret
SSO_INTEGRATION_ID= # Keycloak integration id (dont include leading zeros)

DEBUG= # (optional) Set to 'true' to get useful debug statements in api console.
CSS_API_TOKEN_URL= # (optional) CSS Token url, see default value below.
# https://loginproxy.gov.bc.ca/auth/realms/standard/protocol/openid-connect/token
CSS_API_URL= # (optional) CSS API url, see default value below.
# https://api.loginproxy.gov.bc.ca/api/v1
```

[Return to Top](#bcgov-css-sso-api-integration-as-addon-to-citz-imb-kc-express-package)

<br />

## Module Exports

These are the functions and types exported by the `@bcgov/citz-imb-kc-css-api` module.

```JavaScript
import {
  
} from '@bcgov/citz-imb-kc-css-api';

// TypeScript Types:
import {
  
} from '@bcgov/citz-imb-kc-css-api';

```

[Return to Top](#bcgov-css-sso-api-integration-as-addon-to-citz-imb-kc-express-package)

<br />

## TypeScript Types

These are the TypeScript types of the `@bcgov/citz-imb-kc-css-api` module.

```TypeScript

```

[Return to Top](#bcgov-css-sso-api-integration-as-addon-to-citz-imb-kc-express-package)

<br />

## Applications using this Solution

The following applications are currently using this keycloak implementation solution:

None atm.

<!-- TBD: [SET](https://github.com/bcgov/citz-imb-salary-estimate-tool) - Salary Estimation Tool -->

[Return to Top](#bcgov-css-sso-api-integration-as-addon-to-citz-imb-kc-express-package)

<!-- Link References -->

[@bcgov/citz-imb-kc-express]: https://github.com/bcgov/citz-imb-kc-express
[releases]: https://github.com/bcgov/citz-imb-kc-css-api/releases
[BCGov Keycloak CSS SSO API]: https://github.com/bcgov/sso-keycloak/wiki/CSS-API-Account
