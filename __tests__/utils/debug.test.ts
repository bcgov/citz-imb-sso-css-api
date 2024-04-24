import debug from '@/utils/debug';

jest.mock('src/config', () => ({
  DEBUG: true,
  VERBOSE_DEBUG: true,
  PACKAGE_NAME: 'TestPackage',
}));

// Mock console.log to verify if it's being called correctly
console.log = jest.fn();

describe('Test suite for debug functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case: functionCalled logs correctly when DEBUG is true
  it('should log function call when DEBUG is true', () => {
    debug.functionCalled('testFunction');
    expect(console.log).toHaveBeenCalledWith(
      "DEBUG: testFunction function in 'TestPackage' called.",
    );
  });

  // Test case: requestCompleted logs correctly when DEBUG is true
  it('should log request completion when DEBUG is true', () => {
    debug.requestCompleted('testEndpoint', 200);
    expect(console.log).toHaveBeenCalledWith(
      "DEBUG: Request to testEndpoint in 'TestPackage' completed with status 200",
    );
  });

  // Test case: badResponse logs detailed info when VERBOSE_DEBUG is true
  it('should log detailed bad response when VERBOSE_DEBUG is true', () => {
    const response = {
      ok: false,
      status: 404,
      statusText: 'Not Found',
      url: 'http://test.com',
      headers: new Map(),
    };
    debug.badResponse('testEndpoint', response);
    expect(console.log).toHaveBeenCalledWith(`DEBUG: Request to testEndpoint in 'TestPackage': `, {
      ok: false,
      status: 404,
      statusText: 'Not Found',
      url: 'http://test.com',
      headers: '{}', // JSON.stringify(new Map()) returns '{}'
    });
  });

  // Test case: badTokenResponse logs detailed info when VERBOSE_DEBUG is true
  it('should log detailed token retrieval issues when VERBOSE_DEBUG is true', () => {
    const response = {
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://test.com',
      headers: new Map(),
    };
    debug.badTokenResponse(response);
    expect(console.log).toHaveBeenCalledWith(`DEBUG: retrieveToken in 'TestPackage': `, {
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      url: 'http://test.com',
      headers: '{}', // JSON.stringify(new Map()) returns '{}'
    });
  });
});
