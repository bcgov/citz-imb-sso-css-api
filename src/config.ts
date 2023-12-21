const {
  SSO_ENVIRONMENT = "dev",
  CSS_API_CLIENT_ID = "",
  CSS_API_CLIENT_SECRET = "",
  SSO_INTEGRATION_ID = "",
  DEBUG = "false",
  CSS_API_URL = "https://api.loginproxy.gov.bc.ca/api/v1",
} = process.env;

// Exports.
export default {
  DEBUG: DEBUG === "true" ? true : false,
  SSO_ENVIRONMENT,
  CSS_API_CLIENT_ID,
  CSS_API_CLIENT_SECRET,
  SSO_INTEGRATION_ID,
  CSS_API_URL,
};
