# BCGov CSS SSO API Integration

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](Redirect-URL)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

[![NodeJS](https://img.shields.io/badge/Node.js_20-43853D?style=for-the-badge&logo=node.js&logoColor=white)](NodeJS)
[![Typescript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](Typescript)

<br />

<details>
<summary><h2>TL/DR</h2></summary>

1. Install package by following the steps at [Installing the Package](#installing-the-package).
2. Set up the package by following the steps at [Basic Setup Guide](#basic-setup-guide).
3. Use with [@bcgov/citz-imb-kc-express] or standalone.
4. Allows easy use of the [BCGov Keycloak CSS SSO API] in a nodejs application.

**What is this package for?** - [Checkout General Information](#general-information)

</details>

---

## Table of Contents

- [General Information](#general-information)
- [Installing the Package](#installing-the-package) - **Start Here!**
- [Basic Setup Guide](#basic-setup-guide) - Setting up after installing.
- [Environment Variables](#environment-variables) - Required variables for initialization.
- [Directory Structure](#directory-structure) - How the repo is designed.
- [Scripts](#scripts) - Scripts for running and working on the package.
- [Module Exports](#module-exports) - Functions available from the module.
- [TypeScript Types](#typescript-types) - Available TypeScript types.
- [Applications using this Solution](#applications-using-this-solution) - See an example of how to use.

## General Information

- For running on a NodeJS:20 API.
- For Keycloak Gold Standard.
- Works with Vanilla JavaScript or Typescript 5.
- Use with [@bcgov/citz-imb-kc-express] or standalone.
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

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## Basic Setup Guide

1. Add the required environment variables from the [Environment Variables](#environment-variables) section below.

2. Start using the functions provided in [Module Exports](#module-exports).

*Example use:*

``` TypeScript
import { getRole, getRoleComposites } from "@bcgov/citz-imb-kc-css-api";

/**
 * @returns {object} - Below properties.
 * @property {string} name - the name of the role (ex: "Admin").
 * @property {boolean} composite - if the role is composite (containing 'child' roles).
 */
const { composite } = await getRole('Admin');

if (composite) {
  /**
   * @returns {object} - Below properties.
   * @property {object[]} data - Array of role composites.
   * @property {string} data[i].name - the name of the composite role (ex: "view-reports").
   * @property {boolean} data[i].composite - if the role is composite (containing 'child' roles).
   */
  const { data } = await getRoleComposites('Admin');
  data.forEach(({ name }) => console.log('Admin role holds composite: ', name));
}
```

> [!NOTE]  
> Role composites are set within the CSS SSO Dashboard.  
> Go to 'My Projects' > 'Integrations' > *Select an Integration* > 'Integration Details' > 'Role Management' > *Select a Role* > 'Composite Roles'.

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## Environment Variables

```ENV
# Ensure the following environment variables are defined on the container.

CSS_API_CLIENT_ID= # Keycloak CSS API Service Account client_id
CSS_API_CLIENT_SECRET= # Keycloak CSS API Service Account client_secret

SSO_INTEGRATION_ID= # Keycloak integration id (dont include leading zeros)
SSO_ENVIRONMENT= # 'dev', 'test' or 'prod'. Default is 'dev'.

DEBUG= # (optional) Set to 'true' to get useful debug statements in api console.
CSS_API_URL= # (optional) CSS API url, see default value below.
# https://api.loginproxy.gov.bc.ca/api/v1
```

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## Directory Structure

```
.
├── .github/
|   ├── config/
|   |   └── dep-report.json5                # Configure options for NPM Dep Report.
|   ├── helpers/
|   |   ├── github-api/                     # Functions to access the GitHub API.
|   |   ├── bump-version.js                 # Bumps package.json version.
|   |   ├── create-npm-dep-report-issues.js # Creates GitHub Issues for Npm Dep Reports.
|   |   ├── create-npm-dep-report.js        # Creates text bodies for Npm Dep Reports.
|   |   ├── parse-json5-config.js           # Parses json5 files for GitHub actions output.
|   |   └── parse-npm-deps.js               # Parses package.json files for changes to package versions.
|   ├── workflows/
|   |   ├── npm-dep-report.yaml             # Reports on new package versions.
|   |   └── releases.yaml                   # Creates a new GitHub Release.
├── scripts/
|   ├── remove-dts-files.mjs                # Removes TypeScript declaration files from the build.
|   └── remove-empty-dirs.mjs               # Removes empty directories from the build.
├── src/                                    # Source code for package.
|   ├── utils/                              # Utility functions.
|   ├── config.ts                           # Config variables.
|   ├── index.ts                            # Export functions for the package.
|   └── types.ts                            # TypeScript types.
├── package.json                            # Package config and dependencies.
├── rollup.config.mjs                       # Builds and compiles TypeScript files into JavaScript.
├── rollupdts.config.mjs                    # Builds and compiles TypeScript declartion files.
```

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## Scripts

```bash
# Compile all src code into a bundle in build/ directory.
$ npm run build
```

```bash
# Part of 'build' and it bundles the typescipt declarations into a single bundle.d.ts file.
$ npm run build:dts
```

```bash
# Part of build and it removes directories and files before the build.
$ npm run clean:prebuild
```

```bash
# Part of build and it removes directories and files after the build.
$ npm run clean:postbuild
```

```bash
# Used to package the code before a release.
$ npm run pack
```

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## Module Exports

These are the functions and types exported by the `@bcgov/citz-imb-kc-css-api` module.

```JavaScript
import {
  getIntegration, // Get integration details.
  getRoles, // Get all roles from integration.
  createRole, // Create a new role.
  getRole, // Get role details.
  updateRole, // Update a role name.
  deleteRole, // Remove a role.
  getRoleComposites, // Get a role's composites.
  addRoleComposite, // Add a composite to a role.
  getRoleComposite, // Get a composite role from a role.
  deleteRoleComposite, // Remove a composite role from a role.
  getUserRoles, // Get roles associated with a user.
  assignUserRoles, // Assign roles to a user.
  getUsersWithRole, // Get users associated with a role.
  unassignUserRole, // Unassign a role from a user.
  getIDIRUsers, // Get list of IDIR users by query.
  getAzureIDIRUsers, // Get list of Azure IDIR users by query.
  getGitHubBCGovUsers, // Get list of GitHub BCGov users by query.
  getGitHubPublicUsers, // Get list of GitHub Public users by query.
  getBasicBCeIDUser, // Get Basic BCeID user by guid.
  getBusinessBCeIDUser, // Get Business BCeID user by guid.
  getBothBCeIDUser, // Get Basic or Business BCeID user by guid.
} from '@bcgov/citz-imb-kc-css-api';

```

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## TypeScript Types

These are the TypeScript types of the `@bcgov/citz-imb-kc-css-api` module.

```TypeScript
// Integration
const getIntegration: () => Promise<any>;

// Roles
const getRoles: () => Promise<any>;
const createRole: (roleName: string) => Promise<any>;
const getRole: (roleName: string) => Promise<any>;
const updateRole: (roleName: string, newRoleName: string) => Promise<any>;
const deleteRole: (roleName: string) => Promise<any>;
const getRoleComposites: (roleName: string) => Promise<any>;
const addRoleComposite: (roleName: string, newCompositeRole: string) => Promise<any>;
const getRoleComposite: (roleName: string, compositeRoleName: string) => Promise<any>;
const deleteRoleComposite: (roleName: string, compositeRoleName: string) => Promise<any>;

// Role-Mapping
// username: <guid>@<identity_provider> 
// Example : jj4vrfekurtzc2931k8mroqx3fgibrr3@idir
const getUserRoles: (username: string) => Promise<any>;
const assignUserRoles: (username: string, roleNames: string[]) => Promise<any>;
const getUsersWithRole: (roleName: string, page?: number, count?: number) => Promise<any>;
const unassignUserRole: (username: string, roleName: string) => Promise<any>;

// Users
const getIDIRUsers: (query: IDIRUserQuery) => Promise<any>;
const getAzureIDIRUsers: (query: IDIRUserQuery) => Promise<any>;
const getGitHubBCGovUsers: (query: GitHubUserQuery) => Promise<any>;
const getGitHubPublicUsers: (query: GitHubUserQuery) => Promise<any>;
const getBasicBCeIDUser: (guid: string) => Promise<any>;
const getBusinessBCeIDUser: (guid: string) => Promise<any>;
const getBothBCeIDUser: (guid: string) => Promise<any>;

type RequestParams = {
  integrationEndpoint?: boolean; // Default: false
  environmentEndpoint?: boolean; // Default: true
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE"; // Default: GET
  body?: RequestBody;
};

type RequestRoleObject = {
  name: string;
};

type RequestBody = RequestRoleObject | RequestRoleObject[] | [];

type IDIRUserQuery = {
  firstName?: string;
  lastName?: string;
  email?: string;
  guid?: string;
};

type GitHubUserQuery = {
  name?: string;
  login?: string; // Username
  email?: string;
  guid?: string;
};
```

> [!IMPORTANT]
> For expected response data, reference the following swagger docs:
[BCGov Keycloak CSS SSO API Swagger]

[Return to Top](#bcgov-css-sso-api-integration)

<br />

## Applications using this Solution

The following applications are currently using this keycloak implementation solution:

[PLAY](https://github.com/bcgov/citz-imb-playground) - CITZ IMB Package Testing App
<!-- TBD: [SET](https://github.com/bcgov/citz-imb-salary-estimate-tool) - Salary Estimation Tool -->

[Return to Top](#bcgov-css-sso-api-integration)

<!-- Link References -->

[@bcgov/citz-imb-kc-express]: https://github.com/bcgov/citz-imb-kc-express
[releases]: https://github.com/bcgov/citz-imb-kc-css-api/releases
[BCGov Keycloak CSS SSO API]: https://github.com/bcgov/sso-keycloak/wiki/CSS-API-Account
[BCGov Keycloak CSS SSO API Swagger]: https://api.loginproxy.gov.bc.ca/openapi/swagger
