import dotenv from "dotenv";
dotenv.config();

const {
  SSO_ENVIRONMENT = "dev",
  CSS_API_CLIENT_ID = "",
  CSS_API_CLIENT_SECRET = "",
  SSO_INTEGRATION_ID = "",
  DEBUG = "false",
  VERBOSE_DEBUG = "false",
  CSS_API_URL = "https://api.loginproxy.gov.bc.ca/api/v1",
} = process.env;

if (DEBUG === "true" && VERBOSE_DEBUG === "true") {
  console.log(`DEBUG: 'citz-imb-kc-css-api' environment variables:
  SSO_ENVIRONMENT=${SSO_ENVIRONMENT}
  CSS_API_CLIENT_ID=${CSS_API_CLIENT_ID}
  CSS_API_CLIENT_SECRET=${CSS_API_CLIENT_SECRET}
  SSO_INTEGRATION_ID=${SSO_INTEGRATION_ID.replace(/^0+/, "")}`);
}

// Exports.
export default {
  DEBUG: DEBUG === "true",
  VERBOSE_DEBUG: VERBOSE_DEBUG === "true",
  SSO_ENVIRONMENT,
  CSS_API_CLIENT_ID,
  CSS_API_CLIENT_SECRET,
  SSO_INTEGRATION_ID: SSO_INTEGRATION_ID.replace(/^0+/, ""), // Trim leading zeros.
  CSS_API_URL,
};
