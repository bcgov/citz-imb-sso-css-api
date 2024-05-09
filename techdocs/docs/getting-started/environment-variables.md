# Environment Variables

Ensure the following environment variables are defined on the container.

```ENV
CSS_API_CLIENT_ID= # CSS Account client id, different from SSO integration client id.
CSS_API_CLIENT_SECRET= # CSS Account client secret, different from SSO integration client secret.
SSO_INTEGRATION_ID= # Found in CSS dashboard as 'Request ID' under 'Integrations'.

SSO_ENVIRONMENT= # 'dev', 'test', or 'prod'.
# By default, set to 'dev'.
CSS_API_URL= # (optional) The css api url for making the requests.
# By default, set to 'https://api.loginproxy.gov.bc.ca/api/v1'.

DEBUG= # (optional) Set to 'true' to get useful debug statements in api console.
VERBOSE_DEBUG= # (optional) Set to 'true' to get extra details from DEBUG.
```

!!! tip "Tip"
    `CSS_API_CLIENT_ID`, and `CSS_API_CLIENT_SECRET` can be found in the `My Teams` tab, under `Team Details` > `CSS API Account` and then copying or downloading the details on your SSO integration dashboard (managed by Common Hosted Single Sign-On ([CSS]) team). Make sure to select the correct team.   
    - clientId -> CSS_API_CLIENT_ID,  
    - clientSecret -> CSS_API_CLIENT_SECRET

!!! tip "Tip"
    You shouldn't need to edit `CSS_API_URL` but if needed, it can be found at [CSS API Swagger] under the `Servers` dropdown.

<!-- Reference links -->

[CSS]: https://bcgov.github.io/sso-requests
[CSS API Swagger]: https://api.loginproxy.gov.bc.ca/openapi/swagger
