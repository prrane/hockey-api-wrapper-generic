'use strict';
var request = require('request');
var Wrapper = (function() {
    
    //Constructor
    function HockeyWrapper(token) {
        this.init(token);
    }

    function addProperty(key, value) {
        Object.defineProperty(HockeyWrapper.prototype, key, {        
            get: function () { return value; },
            enumerable: true,
            configurable: true
        });
    }

    addProperty("BASE_URL", 'https://rink.hockeyapp.net/api/2/');
    addProperty("GET_APPS_PATH", 'apps');
    addProperty("GET_APP_VERSION_PATH", 'app_versions');
    addProperty("GET_APP_CRASHES_PATH", 'crash_reasons');
    addProperty("HOCKEY_APP_TOKEN_HEADER", 'X-HockeyAppToken');

    HockeyWrapper.prototype.createRequestOptions = function(urlPath) {
        var requestOptions = {
            url: this.BASE_URL + urlPath,
            method: 'GET',
            headers: {}
        };
        requestOptions.headers[this.HOCKEY_APP_TOKEN_HEADER] = this.token;
        return requestOptions;
    };

    HockeyWrapper.prototype.createGetAppsVersionsByPageOptionsFromPublicIdentifier = function(publicIdentifier, page) {
        page = page || 0
        var urlPath = this.GET_APPS_PATH + "/" + publicIdentifier + "/" + this.GET_APP_VERSION_PATH + "?" + "page=" + page.toString
        return this.createRequestOptions(urlPath);
    };

    HockeyWrapper.prototype.createGetCrashesFromAppIdByPageOptions = function(publicIdentifier, appId, page) {
        page = page || 0
        var urlPath = this.GET_APPS_PATH + "/" + publicIdentifier + "/" + this.GET_APP_VERSION_PATH 
                            + "/" + appId + "/" +  this.GET_APP_CRASHES_PATH + "?" + "page=" + page.toString
        return this.createRequestOptions(urlPath);
    };

    HockeyWrapper.prototype.getAllApps = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            request(_this.createRequestOptions(_this.GET_APPS_PATH), function (error, response, body) {
                resolve(JSON.parse(body));
            });
        });
    };

    HockeyWrapper.prototype.getAppVersionsByPage = function (publicIdentifier, page) {
        var _this = this;
        return new Promise(function(resolve, reject) {            
            var options = _this.createGetAppsVersionsByPageOptionsFromPublicIdentifier(publicIdentifier, page);
            request(options, function(error, response, body) {
                var versionsJSON = JSON.parse(body);
                resolve(versionsJSON);
            });
        });        
    };

    HockeyWrapper.prototype.getCrashesForAppVersionByPage = function (publicIdentifier, versionJSON, page) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            var appId = versionJSON.id;
            var options = _this.createGetCrashesFromAppIdByPageOptions(publicIdentifier, appId, page);
            request(options, function(error, response, body) {
                var crashJSON = JSON.parse(body);
                resolve(crashJSON);
            });
        });        
    };

    HockeyWrapper.prototype.init = function (token) {
        this.token = token;
    };

    return HockeyWrapper;
}());

exports["default"] = Wrapper;