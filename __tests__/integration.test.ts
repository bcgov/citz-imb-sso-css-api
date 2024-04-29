import { getIntegration } from '@/integration';
import { request } from '@/utils/request';
import debug from '@/utils/debug';
import { mockGetIntegrationResponse } from './__mocks__/responses';

jest.mock('@/utils/request');
jest.mock('@/utils/debug');

// Mock the CONFIG
jest.mock('@/config', () => ({
  SSO_INTEGRATION_ID: '123',
}));

// Test suite for getIntegration function
describe('getIntegration function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test case: Calls request with correct parameters
  it('should call request with correct parameters', async () => {
    const mockResponse = mockGetIntegrationResponse;
    (request as jest.Mock).mockResolvedValue(mockResponse);

    const result = await getIntegration();

    expect(debug.functionCalled).toHaveBeenCalledWith('getIntegration');
    expect(request).toHaveBeenCalledWith({
      environmentEndpoint: false,
      endpoint: 'integrations/123',
    });
    expect(result).toEqual(mockResponse);
  });
});
