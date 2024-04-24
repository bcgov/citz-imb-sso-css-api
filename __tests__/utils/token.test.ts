import { retrieveToken } from '@/utils/token';

jest.mock('@/utils/debug');

// Mocking console.error for error logging
console.error = jest.fn();

// Mock the config values
jest.mock('@/config', () => ({
  CSS_API_CLIENT_ID: 'client_id',
  CSS_API_CLIENT_SECRET: 'client_secret',
  SSO_INTEGRATION_ID: '1000',
  CSS_API_URL: 'https://api.loginproxy.gov.bc.ca/api/v1',
  PACKAGE_NAME: 'citz-imb-sso-css-api',
}));

// Test suite for retrieveToken function
describe('retrieveToken function', () => {
  // Helper to mock fetch response
  const mockFetchResponse = (status: number, body?: unknown, ok: boolean = true) => {
    return {
      ok,
      status,
      text: jest.fn().mockResolvedValue(JSON.stringify(body)),
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test case: Retrieves token successfully
  it('should retrieve an access token successfully', async () => {
    const token = 'abc123';
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse(200, { access_token: token }));

    const result = await retrieveToken();
    expect(result).toEqual(token);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/token'),
      expect.objectContaining({
        method: 'POST',
        headers: {
          Authorization: expect.any(String),
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ grant_type: 'client_credentials' }),
      }),
    );
  });

  // Test case: Handles failed token retrieval due to API error
  it('should log error and not return a token when API returns an error', async () => {
    global.fetch = () => {
      throw new Error();
    };

    const result = await retrieveToken();
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error in retrieveToken'),
      expect.any(Error),
    );
  });

  // Test case: Handles network or parsing errors
  it('should handle exceptions thrown during the token retrieval process', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    const result = await retrieveToken();
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error in retrieveToken'),
      expect.any(Error),
    );
  });
});
