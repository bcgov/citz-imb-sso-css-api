import qs from 'querystring';
import {
  getAzureIDIRUsers,
  getBasicBCeIDUser,
  getBothBCeIDUser,
  getBusinessBCeIDUser,
  getGitHubBCGovUsers,
  getGitHubPublicUsers,
  getIDIRUsers,
} from '@/users';
import { request } from '@/utils/request';
import debug from '@/utils/debug';
import { mockGetUsersWithRoleResponse } from './__mocks__/responses';
import { mockGitHubUserQuery, mockGuid, mockIDIRUserQuery } from './__mocks__/parameters';

jest.mock('@/utils/request');
jest.mock('@/utils/debug');

// Mock the CONFIG - At least one variable needs to be set or it will error
jest.mock('@/config', () => ({
  SSO_INTEGRATION_ID: '123',
}));

// Test Suite for Users functionalities
describe('users', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getIDIRUsers', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const query = mockIDIRUserQuery;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getIDIRUsers(query);

      expect(debug.functionCalled).toHaveBeenCalledWith('getIDIRUsers');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `idir/users${query ? `?${qs.stringify(query)}` : ''}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getAzureIDIRUsers', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const query = mockIDIRUserQuery;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getAzureIDIRUsers(query);

      expect(debug.functionCalled).toHaveBeenCalledWith('getAzureIDIRUsers');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `azure-idir/users${query ? `?${qs.stringify(query)}` : ''}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getGitHubBCGovUsers', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const query = mockGitHubUserQuery;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getGitHubBCGovUsers(query);

      expect(debug.functionCalled).toHaveBeenCalledWith('getGitHubBCGovUsers');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `github-bcgov/users${query ? `?${qs.stringify(query)}` : ''}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getGitHubPublicUsers', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const query = mockGitHubUserQuery;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getGitHubPublicUsers(query);

      expect(debug.functionCalled).toHaveBeenCalledWith('getGitHubPublicUsers');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `github-public/users${query ? `?${qs.stringify(query)}` : ''}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getBasicBCeIDUser', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const guid = mockGuid;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getBasicBCeIDUser(guid);

      expect(debug.functionCalled).toHaveBeenCalledWith('getBasicBCeIDUser');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `basic-bceid/users?guid=${guid}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getBusinessBCeIDUser', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const guid = mockGuid;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getBusinessBCeIDUser(guid);

      expect(debug.functionCalled).toHaveBeenCalledWith('getBusinessBCeIDUser');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `business-bceid/users?guid=${guid}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getBothBCeIDUser', () => {
    // Test case: Calls request with correct parameters
    it('should call request with correct parameters', async () => {
      const guid = mockGuid;
      const mockResponse = mockGetUsersWithRoleResponse;
      (request as jest.Mock).mockResolvedValue(mockResponse);

      const result = await getBothBCeIDUser(guid);

      expect(debug.functionCalled).toHaveBeenCalledWith('getBothBCeIDUser');
      expect(request).toHaveBeenCalledWith({
        integrationEndpoint: false,
        endpoint: `basic-business-bceid/users?guid=${guid}`,
      });
      expect(result).toEqual(mockResponse);
    });
  });
});
