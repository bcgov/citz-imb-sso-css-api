import { request } from "./utils/request";
import { logDebug } from "./utils/logDebug";
import config from "./config";
const { DEBUG, SSO_INTEGRATION_ID } = config;

// getIntegration - Get integration details.
export const getIntegration = async () => {
  if (DEBUG) logDebug("getIntegration");
  return await request({
    environmentEndpoint: false,
    endpoint: `integrations/${SSO_INTEGRATION_ID}`,
  });
};
