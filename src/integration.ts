import { request } from './utils/request';
import debug from './utils/debug';

import CONFIG from './config';
import { GetIntegrationResponse } from './types';
const { SSO_INTEGRATION_ID } = CONFIG;

/**
 * Get integration details.
 * @returns {Promise<GetIntegrationResponse>}
 */
export const getIntegration = async (): Promise<GetIntegrationResponse> => {
  debug.functionCalled('getIntegration');
  return await request({
    environmentEndpoint: false,
    endpoint: `integrations/${SSO_INTEGRATION_ID}`,
  });
};
