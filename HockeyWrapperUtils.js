'use strict';

var HockeyWrapperUtils = (function () {
    function HockeyWrapperUtils() {
    }
    
    HockeyWrapperUtils.appFromAppResponseWithTitle = function (appsResponse, title) {
        var apps = appsResponse.apps;
        for (var i = 0; i < apps.length; i++) {
            if (apps[i].title.toLowerCase() == title.toLowerCase()) {
                return apps[i];
            }
        }
        return null;
    };

    HockeyWrapperUtils.getTopFewVersionsFromVersionResponse = function (versionResponse, limitToCount) {
        var versions = versionResponse.app_versions;
        if (versions.length < limitToCount) {
            limitToCount = versions.length - 1
        }
        var versions = versions.slice(0, limitToCount);
        return versions
    };
    
    return HockeyWrapperUtils;
}());
exports.__esModule = true;
exports["default"] = HockeyWrapperUtils;
