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

// Exports.
const config = {
  DEBUG: DEBUG === "true",
  VERBOSE_DEBUG: VERBOSE_DEBUG === "true",
  PACKAGE_NAME: "citz-imb-sso-css-api",
  SSO_ENVIRONMENT,
  CSS_API_CLIENT_ID,
  CSS_API_CLIENT_SECRET,
  SSO_INTEGRATION_ID: SSO_INTEGRATION_ID.replace(/^0+/, ""), // Trim leading zeros.
  CSS_API_URL,
};

// Throw error if required env vars are not set.
if (!CSS_API_CLIENT_ID || !CSS_API_CLIENT_SECRET || !SSO_INTEGRATION_ID)
  throw new Error(
    `One or more environment variables were undefined for package ${config.PACKAGE_NAME}. 
    Ensure [CSS_API_CLIENT_ID, CSS_API_CLIENT_SECRET, SSO_INTEGRATION_ID] variables are set.`
  );

// Log all variables.
if (config.DEBUG && config.VERBOSE_DEBUG)
  console.info(
    `DEBUG: Configuration variables for '${config.PACKAGE_NAME}': `,
    config
  );

export default config;
