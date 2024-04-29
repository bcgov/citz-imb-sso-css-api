import {
  getRoles,
  createRole,
  getRole,
  updateRole,
  deleteRole,
  getRoleComposites,
  addRoleComposite,
  getRoleComposite,
  deleteRoleComposite,
} from '@/roles';
import { request } from '@/utils/request';
import debug from '@/utils/debug';
import {
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

// Test Suite for Role functionalities
describe('roles', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getRoles', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const mockRoles = [mockRoleResponse('admin', true)];
      const mockResponse = mockRolesArrayResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getRoles();

      expect(debug.functionCalled).toHaveBeenCalledWith('getRoles');
      expect(request).toHaveBeenCalled();
      expect(result).toEqual(mockResponse);
    });
  });

  describe('createRole', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'admin';
      const mockRoles = [mockRoleResponseWithoutComposite(roleName)];
      const mockResponse = mockRolesArrayWithoutCompositeResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await createRole(roleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('createRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: 'roles',
        method: 'POST',
        body: { name: roleName },
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getRole', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'admin';
      const mockResponse = mockRoleResponse(roleName, true);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getRole(roleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('getRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('updateRole', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'admin';
      const newRoleName = 'superuser';
      const mockResponse = mockRoleResponseWithoutComposite(newRoleName);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await updateRole(roleName, newRoleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('updateRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}`,
        method: 'PUT',
        body: { name: newRoleName },
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('deleteRole', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'editor';
      const mockResponse = {};
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await deleteRole(roleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('deleteRole');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}`,
        method: 'DELETE',
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getRoleComposites', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'editor';
      const mockRoles = [mockRoleResponse('admin', true)];
      const mockResponse = mockRolesArrayResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getRoleComposites(roleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('getRoleComposites');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/composite-roles`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('addRoleComposite', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'editor';
      const newCompositeRole = 'write';
      const mockRoles = [mockRoleResponseWithoutComposite('write')];
      const mockResponse = mockRolesArrayWithoutCompositeResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await addRoleComposite(roleName, newCompositeRole);

      expect(debug.functionCalled).toHaveBeenCalledWith('addRoleComposite');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/composite-roles`,
        method: 'POST',
        body: { name: newCompositeRole },
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getRoleComposite', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'editor';
      const compositeRoleName = 'view';
      const mockRoles = [mockRoleResponse('write', false)];
      const mockResponse = mockRolesArrayResponse(mockRoles);
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getRoleComposite(roleName, compositeRoleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('getRoleComposite');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('deleteRoleComposite', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const roleName = 'editor';
      const compositeRoleName = 'view';
      const mockResponse = {};
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await deleteRoleComposite(roleName, compositeRoleName);

      expect(debug.functionCalled).toHaveBeenCalledWith('deleteRoleComposite');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: true,
        endpoint: `roles/${roleName}/composite-roles/${compositeRoleName}`,
        method: 'DELETE',
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
