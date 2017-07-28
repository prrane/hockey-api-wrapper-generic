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
    
    // /**
    // * From the response of "getApps" returns an item that match the id
    // * @param appsResponse response from getApps method
    // * @param match title to match
    // */
    // HockeyAppUtils.getAppByIdMatch = function (appsResponse, match) {
    //     var apps = appsResponse.apps;
    //     for (var i = 0; i < apps.length; i++) {
    //         if (apps[i].public_identifier == match) {
    //             return apps[i];
    //         }
    //     }
    //     return null;
    // };
    // ;
    // HockeyAppUtils.getAppByVersionFilter = function (versionResponse, filter) {
    //     var versions = versionResponse.app_versions;
    //     for (var i = 0; i < versions.length; i++) {
    //         var version = versions[i];
    //         if (filter(version)) {
    //             return version;
    //         }
    //     }
    //     return null;
    // };
    // /**
    //  * From the response of "getVersions" returns the latest version
    //  * @param versionResponse response from getVersions method
    //  */
    // HockeyAppUtils.getLatestVersion = function (versionResponse) {
    //     return versionResponse.app_versions[0];
    // };
    // ;


    return HockeyWrapperUtils;
}());
exports.__esModule = true;
exports["default"] = HockeyWrapperUtils;
