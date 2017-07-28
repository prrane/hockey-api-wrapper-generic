'use strict';

var HockeyWrapper = require('./HockeyWrapper');
var HockeyWrapperUtils = require('./HockeyWrapperUtils');

// usage: var hockeyWrapper = new HockeyWrapper.Instance(YOUR_HOCKEYAPP_AUTH_TOKEN);
exports.Instance = HockeyWrapper["default"];

exports.Utils = HockeyWrapperUtils["default"];