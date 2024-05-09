# Module Exports

These are the functions and types exported by the package.

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
} from '@bcgov/citz-imb-sso-css-api';

// TypeScript Types:
import {
  IDIRUserQuery, // Query type when using getIDIRUsers or getAzureIDIRUsers.
  GitHubUserQuery, // Query type when using getGitHubBCGovUsers or getGitHubPublicUsers.
} from '@bcgov/citz-imb-sso-css-api';
```
