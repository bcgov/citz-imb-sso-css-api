import { request } from "./utils/request";
import debug from "./utils/debug";

import config from "./config";
const { SSO_INTEGRATION_ID } = config;

// getIntegration - Get integration details.
export const getIntegration = async () => {
  debug.functionCalled("getIntegration");
  return await request({
    environmentEndpoint: false,
    endpoint: `integrations/${SSO_INTEGRATION_ID}`,
  });
};
