import { RoleResponse, RoleResponseWithoutComposite } from '@/types';

// Type GetIntegrationResponse
export const mockGetIntegrationResponse = {
  id: 123,
  projectName: 'test',
  authType: 'browser-login',
  environments: 'dev',
  status: 'draft',
  createdAt: '2022-08-10T21:21:25.303Z',
  updatedAt: '2022-08-10T21:21:25.303Z',
};

// Type RoleResponse
export const mockRoleResponse = (name: string, composite: boolean) => {
  return {
    name,
    composite,
  };
};

// Type RoleResponseWithoutComposite
export const mockRoleResponseWithoutComposite = (name: string) => {
  return { name };
};

// Type RolesArrayResponse
export const mockRolesArrayResponse = (roleResponses: RoleResponse[]) => {
  return {
    data: roleResponses,
  };
};

// Type RolesArrayWithoutCompositeResponse
export const mockRolesArrayWithoutCompositeResponse = (
  roleResponses: RoleResponseWithoutComposite[],
) => {
  return { data: roleResponses };
};

// Type GetUsersWithRoleResponse
export const mockGetUsersWithRoleResponse = {
  page: 1,
  data: {
    username: 'test',
    email: 'test@test.com',
    firstName: 'John',
    lastName: 'Doe',
    attributes: {},
  },
};
