import { getUserRoles, assignUserRoles, getUsersWithRole, unassignUserRole } from '@/roleMapping';
import { request } from '@/utils/request';
import debug from '@/utils/debug';
import { mockUsername } from './__mocks__/parameters';
import {
  mockGetUsersWithRoleResponse,
  mockRoleResponse,
  mockRoleResponseWithoutComposite,
  mockRolesArrayResponse,
  mockRolesArrayWithoutCompositeResponse,
} from './__mocks__/responses';

jest.mock('@/utils/request');
jest.mock('@/utils/debug');

// Mock the CONFIG - At least one variable needs to be set or it will error
jest.mock('@/config', () => ({
  SSO_INTEGRATION_ID: '123',
}));

// Test Suite for Role Mapping functionalities
describe('roleMapping', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getUserRoles', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters and return roles', async () => {
      const username = mockUsername;
      const mockRoles = [mockRoleResponse('admin', true), mockRoleResponse('user', false)];
      const mockResponse = mockRolesArrayResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getUserRoles(username);

      expect(debug.functionCalled).toHaveBeenCalledWith('getUserRoles');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `users/${username}/roles`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('assignUserRoles', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const username = mockUsername;
      const roles = ['admin', 'editor'];
      const mockRoles = [
        mockRoleResponseWithoutComposite('admin'),
        mockRoleResponseWithoutComposite('editor'),
      ];
      const mockResponse = mockRolesArrayWithoutCompositeResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await assignUserRoles(username, roles);

      expect(debug.functionCalled).toHaveBeenCalledWith('assignUserRoles');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `users/${username}/roles`,
        method: 'POST',
        body: roles.map((roleName) => ({ name: roleName })),
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getUsersWithRole', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'admin';
      const page = 1;
      const maxCount = 10;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getUsersWithRole(roleName, page, maxCount);

      expect(debug.functionCalled).toHaveBeenCalledWith('getUsersWithRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/users?page=${page}&max=${maxCount}`,
      });
      expect(result).toEqual(mockResponse);
    });

    // Test case: Properly handles when page is provided, but not maxCount
    it('should call request with page but not maxCount parameter', async () => {
      const roleName = 'admin';
      const page = 1;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getUsersWithRole(roleName, page);

      expect(debug.functionCalled).toHaveBeenCalledWith('getUsersWithRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/users?page=${page}`,
      });
      expect(result).toEqual(mockResponse);
    });

    // Test case: Properly handles when page is not provided
    it('should call request without page parameter', async () => {
      const roleName = 'admin';
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getUsersWithRole(roleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('getUsersWithRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/users`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('unassignUserRole', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const username = mockUsername;
      const roleName = 'editor';
      const mockResponse = {};
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await unassignUserRole(username, roleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('unassignUserRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `users/${username}/roles/${roleName}`,
        method: 'DELETE',
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
