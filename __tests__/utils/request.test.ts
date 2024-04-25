import { request } from '@/utils/request';
import { retrieveToken } from '@/utils/token';
import debug from '@/utils/debug';
import { RequestParams } from '@/types';

jest.mock('@/utils/token');
jest.mock('@/utils/debug');

// Mock console.error to verify that it is called
console.error = jest.fn();

// Mock the config values
jest.mock('@/config', () => ({
  CSS_API_CLIENT_ID: 'client_id',
  CSS_API_CLIENT_SECRET: 'client_secret',
  SSO_INTEGRATION_ID: '1000',
  CSS_API_URL: 'https://api.loginproxy.gov.bc.ca/api/v1',
}));

// Test suite for request function
describe('request function', () => {
  // Mock the response object for fetch
  const mockFetchResponse = (status: number, body?: unknown, ok: boolean = true) => {
    return {
      ok,
      status,
      json: jest.fn().mockResolvedValue(body),
      text: jest.fn().mockResolvedValue(body),
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test case: Handles missing access token correctly
  it('should throw an error if no access token is provided', async () => {
    (retrieveToken as jest.Mock).mockResolvedValue(null);
    await request({ endpoint: 'test' });
    expect(console.error).toHaveBeenCalled();
    expect(debug.badResponse).not.toHaveBeenCalled();
    expect(debug.requestCompleted).not.toHaveBeenCalled();
  });

  // Test case: Handles POST requests with a JSON body correctly
  it('should send a POST request with a JSON body and process the response', async () => {
    const requestBody = { name: 'test' };
    const responseBody = { success: true, detail: 'Item created' };
    (retrieveToken as jest.Mock).mockResolvedValue('dummy_token');
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse(201, responseBody));

    const params: RequestParams = {
      endpoint: 'create',
      method: 'POST',
      body: requestBody,
      integrationEndpoint: false,
      environmentEndpoint: false,
    };

    const result = await request(params);
    expect(result).toEqual(responseBody);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.loginproxy.gov.bc.ca/api/v1/create',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: `Bearer dummy_token`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify(requestBody),
      }),
    );
  });

  // Test case: Sends correct request with defaults and receives JSON response
  it('should handle a successful JSON response with default method GET', async () => {
    (retrieveToken as jest.Mock).mockResolvedValue('dummy_token');
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse(200, { data: 'success' }));
    const result = await request({ endpoint: 'test' });
    expect(result).toEqual({ data: 'success' });
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('test'),
      expect.objectContaining({
        method: 'GET',
        headers: expect.any(Object),
      }),
    );
  });

  // Test case: Handles non-JSON responses correctly
  it('should handle a text response for non-200/201 statuses', async () => {
    (retrieveToken as jest.Mock).mockResolvedValue('dummy_token');
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse(404, 'Not Found', false));
    const result = await request({ endpoint: 'test' });
    expect(result).toBe('Not Found');
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('test'), expect.any(Object));
  });

  // Test case: Logs information on bad and completed requests
  it('should call debug methods on bad and completed requests', async () => {
    (retrieveToken as jest.Mock).mockResolvedValue('dummy_token');
    const response = mockFetchResponse(500, 'Server Error', false);
    global.fetch = jest.fn().mockResolvedValue(response);
    await request({ endpoint: 'test' });
    expect(debug.badResponse).toHaveBeenCalledWith('test', response);
    expect(debug.requestCompleted).toHaveBeenCalledWith('test', 500);
  });

  // Test case: Endpoint not specified, should use default empty string and build URL accordingly
  it('should handle requests correctly when endpoint is not specified', async () => {
    (retrieveToken as jest.Mock).mockResolvedValue('dummy_token');
    const params = {
      integrationEndpoint: true,
      environmentEndpoint: false,
      method: 'GET',
    };
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse(200, { data: 'success' }));
    await request(params as RequestParams);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.loginproxy.gov.bc.ca/api/v1/integrations/1000/',
      expect.objectContaining({
        method: 'GET',
      }),
    );
  });

  // Test case: integrationEndpoint is true and environmentEndpoint is false
  it('should build the request URL with integration but without environment', async () => {
    (retrieveToken as jest.Mock).mockResolvedValue('dummy_token');
    const params = {
      integrationEndpoint: true,
      environmentEndpoint: false,
      endpoint: 'list',
      method: 'POST',
    };
    global.fetch = jest.fn().mockResolvedValue(mockFetchResponse(200, { data: 'success' }));
    await request(params as RequestParams);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.loginproxy.gov.bc.ca/api/v1/integrations/1000/list',
      expect.objectContaining({
        method: 'POST',
      }),
    );
  });
});
