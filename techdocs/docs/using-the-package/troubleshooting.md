# Troubleshooting

Sometimes issues may arise when using the packages for the first time, or when updating to a new version. Use this guide to help troubleshoot the problem.

## Initial Setup Checklist

1. Ensure you follow the [Quick Start Guide](../getting-started/quick-start-guide.md) closely.

2. Ensure [Environment Variables](../getting-started/environment-variables.md) are properly configured in the container running the package.

<br />

## Diagnosing the Problem

If an issue persists after following all the proper setup guides, you can set `DEBUG` and `VERBOSE_DEBUG` environment variables to `true` to get more detailed console logs. These logs may help you spot an issue such as a bad response from the CSS API.

If you can't resolve the problem yourself, open a [Bug Report](https://github.com/bcgov/citz-imb-sso-css-api/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=Bug%3A+) and mention any issues you've found in your troubleshooting.

<br />

## Common Issues

### Function Results in a `Promise { <pending> }`

Each of the functions provided by this package are asynchronous. This means that the function will run in the background without blocking other events from running, and then once the funtion has completed, it will return the result.

If the function you are trying to use is returning `Promise { <pending> }` it is because you are not awaiting the result of the async function.

Make sure your call to the function is within an `async` function or that async functions can be awaited at the top level of your file, and that the function is proceeded by the `await` keyword.
