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
    addProperty("GET_APP_VERSION_PATH", 'apps/{public_identifier}/app_versions');
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

    HockeyWrapper.prototype.createGetAppsRequestOptions = function(page) {
        page = page || 0
        var urlPath = this.GET_APPS_PATH + "?" + "page=" + page.toString
        return this.createRequestOptions(urlPath);
    };

    HockeyWrapper.prototype.getAllApps = function () {
        this.getAppsByPage(0)
    };

    HockeyWrapper.prototype.getAppsByPage = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var options = _this.createGetAppsRequestOptions(page);
            request(options, function (error, response, body) {
                var result = JSON.parse(body);
                console.log(result)
                resolve(result);
            });
        });
    };


    HockeyWrapper.prototype.init = function (token) {
        this.token = token;
    };

    return HockeyWrapper;
}());

exports["default"] = Wrapper;