# hockey-api-wrapper-generic

This is a small wrapper for 'GET' methods for HockeyApp, inspired by: https://www.npmjs.com/package/hockeyapp-api-wrapper thanks to https://www.npmjs.com/~eridem

## Usage:
```
var hockeyWrapper = new HockeyWrapper.Instance(YOUR_HOCKEYAPP_AUTH_TOKEN);  
```

## Supported Methods:

`getApps()` Get all apps associated with token.
`getAppVersionsByPage(page)` Get all apps with pagination support
`getCrashesForAppVersionByPage(publicIdentifier, versionJSON, page)` Get crashes for the app identified by `publicIdentifier` with pagination support.

## Upcoming:
- Crash histogram